<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $roleUsers = [
        'Owner' => [
            'permission' => [],
        ],
        'Manager' => [
            'permission' => [
                'View users',
                'Create user',
                'Show user',
                'Edit user',
                'Delete user',
                'View role and permission',
            ],
        ],
        'Member' => [
            'permission' => [
                'View users',
            ],
        ],

    ];

    public function run()
    {
        foreach ($this->roleUsers as $name => $attr) {
            $this->createRoleWithPermissions($name, $attr['permission']);
        }
    }

    private function createRoleWithPermissions(string $role, array $permissions = []): Role
    {
        $role = Role::findOrCreate($role);
        $permissions = $this->permissions(...$permissions)->reduce(function ($items, array $access, string $module) {
            foreach ($access as $permit) {
                $items[$module.'.'.$permit] = $module;
            }

            return $items;
        }, []);

        foreach ($permissions as $name => $module) {
            $role->permissions()->updateOrCreate(['name' => $name], ['module_name' => $module]);
        }

        return $role;
    }

    private function permissions(string ...$permitted): Collection
    {
        $permissions = collect([
            'dashboard' => ['view'],
            'users' => ['view', 'create', 'details', 'update', 'delete'],
            'role_permission' => ['view', 'create'],
        ]);

        return ! empty($permitted) ? $permissions->only($permitted) : $permissions;
    }
}
