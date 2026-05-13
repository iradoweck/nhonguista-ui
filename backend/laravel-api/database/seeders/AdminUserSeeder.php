<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::updateOrCreate(
            ['email' => 'admin@nhonguista.co.mz'],
            [
                'name' => 'Edmilson Muacigarro',
                'username' => 'admin',
                'phone' => '+258840000000',
                'password' => Hash::make('password123'),
                'is_active' => true,
            ]
        );

        $admin->assignRole('admin');
        $admin->assignRole('client'); // Admins can also be clients
    }
}
