<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = collect([
            'dashboard' => ['view'],
            'users' => ['view', 'create', 'detail', 'update', 'delete'],
            'role_permission' => ['view', 'create'],
        ]);

        foreach ($permissions as $key => $permission) {
            foreach ($permission as $value) {
                Permission::create(['name' => $key.'.'.$value, 'module_name' => $key]);
            }
        }
    }
}
