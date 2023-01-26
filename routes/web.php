<?php

use App\Http\Controllers;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware('auth')->group(function () {
    Route::get(RouteServiceProvider::HOME, function (Request $request) {
        return Inertia::render('auth/Dashboard', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('home');
    Route::controller(Controllers\UserController::class)->prefix('users')->group(function () {
        Route::get('', 'index')->name('users.home');
        Route::get('create', 'create')->name('users.create');
        Route::get('{user}/show', 'show')->name('users.show');
        Route::get('{user}/edit', 'edit')->name('users.edit');
        Route::put('{user}/edit', 'update')->name('users.update');
        Route::delete('{user}/delete', 'destroy')->name('users.destroy');
    });
});
