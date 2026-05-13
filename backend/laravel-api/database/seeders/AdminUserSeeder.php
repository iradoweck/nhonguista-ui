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
        User::create([
            'name' => 'Edmilson Muacigarro',
            'username' => 'admin',
            'email' => 'admin@nhonguista.co.mz',
            'phone' => '+258800000000',
            'password' => Hash::make('password123'),
            'is_active' => true,
        ]);
    }
}
