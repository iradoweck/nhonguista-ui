<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Limpeza Residencial',
            'Manutenção Elétrica',
            'Encanamento',
            'Pintura',
            'Desenvolvimento Web',
            'Design Gráfico',
            'Fotografia',
            'Transporte e Mudanças',
            'Culinária e Confeitaria',
            'Aulas Particulares'
        ];

        foreach ($categories as $category) {
            Category::create([
                'name' => $category,
                'slug' => Str::slug($category),
                'description' => 'Serviços relacionados a ' . $category,
            ]);
        }
    }
}
