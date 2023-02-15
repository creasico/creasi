<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PermissionsSeeder::class);
        $this->createInitialUsers();
    }

    /**
     * Create Initial Users.
     *
     * @return void
     */
    private function createInitialUsers(): void
    {
        if (User::all()->count() > 0) {
            return;
        }

        $user = User::factory()->create([
            'name' => 'creasi',
            'email' => 'admin@creasi.dev',
        ]);

        $role = Role::create(['name' => 'Owner']);
        $permissions = Permission::pluck('id', 'id')->all();
        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);
    }
}
