<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Construção e Obras',
                'slug' => 'construcao-e-obras',
                'icon' => 'HardHat',
                'image' => 'categories/construcao.jpg',
                'order' => 1
            ],
            [
                'name' => 'Limpeza e Higiene',
                'slug' => 'limpeza-e-higiene',
                'icon' => 'Sparkles',
                'image' => 'categories/limpeza.jpg',
                'order' => 2
            ],
            [
                'name' => 'Tecnologia e IT',
                'slug' => 'tecnologia-e-it',
                'icon' => 'Laptop',
                'image' => 'categories/tecnologia.jpg',
                'order' => 3
            ],
            [
                'name' => 'Transporte e Entregas',
                'slug' => 'transporte-e-entregas',
                'icon' => 'Truck',
                'image' => 'categories/transporte.jpg',
                'order' => 4
            ],
            [
                'name' => 'Beleza e Bem-estar',
                'slug' => 'beleza-e-bem-estar',
                'icon' => 'Scissors',
                'image' => 'categories/beleza.jpg',
                'order' => 5
            ],
            [
                'name' => 'Eventos e Catering',
                'slug' => 'eventos-e-catering',
                'icon' => 'Music',
                'image' => 'categories/eventos.jpg',
                'order' => 6
            ],
            [
                'name' => 'Aulas e Tutoria',
                'slug' => 'aulas-e-tutoria',
                'icon' => 'BookOpen',
                'image' => 'categories/aulas.jpg',
                'order' => 7
            ],
            [
                'name' => 'Outros Serviços',
                'slug' => 'outros-servicos',
                'icon' => 'Plus',
                'image' => 'categories/outros.jpg',
                'order' => 8
            ],
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(['slug' => $category['slug']], $category);
        }
    }
}
