<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Cliente',
                'slug' => 'client',
                'description' => 'Usuário que procura e contrata serviços.'
            ],
            [
                'name' => 'Nhonguista (Provedor)',
                'slug' => 'provider',
                'description' => 'Profissional que oferece serviços na plataforma.'
            ],
            [
                'name' => 'Administrador',
                'slug' => 'admin',
                'description' => 'Gestor do sistema com acesso total.'
            ],
        ];

        foreach ($roles as $role) {
            Role::updateOrCreate(['slug' => $role['slug']], $role);
        }
    }
}
