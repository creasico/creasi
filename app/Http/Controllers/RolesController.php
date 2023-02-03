<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::all();

        return Inertia::render('Role/index', ['roles' => $roles]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $permissions = Permission::select(['id', 'module_name', 'name'])->get()->groupBy('module_name');
        $roles = collect([
            'Owner', 'Manager', 'Member',
        ]);

        return Inertia::render('Role/Create', ['permissions' => $permissions, 'roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $role = Role::updateOrCreate([
            'name' => $request->role,
            'guard_name' => 'web',
        ]);

        if (count($request->permission) > 0) {
            $role->syncPermissions($request->permission);
        }

        return Redirect::route('roles.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role = Role::findOrFail($id);
        $permissions = Permission::select(['id', 'module_name', 'name'])
            ->get()->groupBy('module_name');

        return Inertia::render('Role/Show', ['role' => $role,
            'permissions' => $permissions]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $role = Role::findOrFail($id);
        $permissions = Permission::select(['id', 'module_name', 'name'])->get()->groupBy('module_name');

        return Inertia::render('Role/Edit', compact('role', 'permissions'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        $role->update([
            'name' => $request->role,
        ]);
        $role->syncPermissions($request->permission);

        if ($role) {
            return Redirect::route('roles.index');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::findOrFail($id);
        $role->revokePermissionTo(request()->permission);
        $role->delete();

        if ($role) {
            return Redirect::route('roles.index');
        }
    }
}
