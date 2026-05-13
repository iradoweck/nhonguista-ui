<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Category;
use App\Models\Location;
use App\Models\Service;
use App\Models\Review;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::all();
        $locations = Location::all();

        // 1. Create a dedicated Test Client
        User::updateOrCreate(
            ['email' => 'cliente@nhonguista.co.mz'],
            [
                'name' => 'Cliente de Teste',
                'phone' => '840000001',
                'password' => Hash::make('password'),
                'is_active' => true,
            ]
        )->assignRole('client');

        // 2. Create sample providers
        $providers = [
            [
                'name' => 'João Pedreiro',
                'email' => 'joao.pedreiro@nhonguista.com',
                'phone' => '841234567',
                'services' => [
                    [
                        'title' => 'Assentamento de Blocos e Reboque',
                        'category_slug' => 'construcao-e-obras',
                        'price_min' => 200,
                        'price_max' => 500,
                        'price_type' => 'negociavel',
                        'description' => 'Mestre pedreiro com 15 anos de experiência em obras civis em Nampula.'
                    ]
                ]
            ],
            [
                'name' => 'Maria Limpezas',
                'email' => 'maria.limpeza@nhonguista.com',
                'phone' => '829876543',
                'services' => [
                    [
                        'title' => 'Limpeza Profunda de Escritórios',
                        'category_slug' => 'limpeza-e-higiene',
                        'price_min' => 1000,
                        'price_max' => 2500,
                        'price_type' => 'fixo',
                        'description' => 'Serviço de limpeza com equipamentos modernos para empresas e residências.'
                    ]
                ]
            ],
            [
                'name' => 'António Informática',
                'email' => 'antonio.it@nhonguista.com',
                'phone' => '875554433',
                'services' => [
                    [
                        'title' => 'Reparação de Laptops e Redes',
                        'category_slug' => 'tecnologia-e-it',
                        'price_min' => 500,
                        'price_max' => null,
                        'price_type' => 'hora',
                        'description' => 'Técnico certificado em hardware e redes. Atendimento ao domicílio.'
                    ]
                ]
            ],
            [
                'name' => 'Chapa Express Nampula',
                'email' => 'chapa.express@nhonguista.com',
                'phone' => '843332211',
                'services' => [
                    [
                        'title' => 'Transporte de Cargas Leves',
                        'category_slug' => 'transporte-e-entregas',
                        'price_min' => 300,
                        'price_max' => 1500,
                        'price_type' => 'negociavel',
                        'description' => 'Transporte rápido de mobiliário e mercadorias dentro da cidade.'
                    ]
                ]
            ],
        ];

        foreach ($providers as $pData) {
            $user = User::updateOrCreate(
                ['email' => $pData['email']],
                [
                    'name' => $pData['name'],
                    'phone' => $pData['phone'],
                    'password' => Hash::make('password'),
                    'is_active' => true,
                ]
            );

            // Assign Provider role
            $user->assignRole('provider');

            foreach ($pData['services'] as $sData) {
                $category = Category::where('slug', $sData['category_slug'])->first();
                $location = $locations->random();

                $service = Service::create([
                    'user_id' => $user->id,
                    'category_id' => $category->id,
                    'location_id' => $location->id,
                    'title' => $sData['title'],
                    'description' => $sData['description'],
                    'price_min' => $sData['price_min'],
                    'price_max' => $sData['price_max'],
                    'price_type' => $sData['price_type'],
                    'is_active' => true,
                    'is_featured' => rand(0, 1) == 1,
                    'images' => [
                        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800',
                        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800'
                    ]
                ]);

                // Add sample reviews
                Review::create([
                    'service_id' => $service->id,
                    'reviewer_id' => User::factory()->create()->id,
                    'rating' => rand(4, 5),
                    'comment' => 'Excelente serviço, muito profissional e rápido!'
                ]);
            }
        }
    }
}
