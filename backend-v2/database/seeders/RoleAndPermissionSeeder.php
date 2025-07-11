<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RoleAndPermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Hapus cache permission
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Buat permission
        $permissions = [
            'access filament',
            'create post',
            'edit post',
            'delete post',
            'create comment',
            'reply comment',
            'approve comment',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Buat role
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $user = Role::firstOrCreate(['name' => 'user']);

        // Assign semua permission ke admin
        $admin->syncPermissions(Permission::all());

        // Assign permission terbatas ke user
        $user->syncPermissions([
            'create comment',
            'reply comment',
        ]);

        // Assign role ke user id 1 sebagai admin (jika ada)
        $adminUser = User::find(1);
        if ($adminUser && !$adminUser->hasRole('admin')) {
            $adminUser->assignRole('admin');
        }

        // Contoh assign user role biasa
        $userModel = User::find(2);
        if ($userModel && !$userModel->hasRole('user')) {
            $userModel->assignRole('user');
        }

        $this->command->info('✅ Role dan Permission berhasil dibuat.');
    }
}
