<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class);
        // $this->middleware('role:Owner');
    }

    /**
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function index()
    {
        $users = User::whereNot('id', Auth::user()->id)->get();

        return Inertia::render('Users/index', ['users' => $users]);
    }

    /**
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function create()
    {
        $roles = Role::all();

        return Inertia::render('Users/Create', ['roles' => $roles]);
    }

    public function store(StoreRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $user->assignRole($request->role);

        if ($user) {
            return Redirect::route('users.home');
        }
    }

    /**
     * @param  User  $user
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function edit(User $user)
    {
        $role = $user->getRoleNames();
        $roles = Role::all();

        return Inertia::render('Users/Edit', [
            'user' => $user,
            'role' => $role,
            'roles' => $roles,
        ]);
    }

    public function show(User $user)
    {
        return Inertia::render('Users/Show', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        if ($user) {
            return Redirect::route('users.home');
        }
    }

    public function destroy(User $user)
    {
        if ($user) {
            $user->delete();

            return Redirect::route('users.home');
        }
    }
}
