<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Location;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $locations = [
            ['name' => 'Nampula - Cidade (Centro)', 'slug' => 'nampula-centro'],
            ['name' => 'Muhala', 'slug' => 'muhala'],
            ['name' => 'Muatala', 'slug' => 'muatala'],
            ['name' => 'Namutequeliua', 'slug' => 'namutequeliua'],
            ['name' => 'Natikiri', 'slug' => 'natikiri'],
            ['name' => 'Napipine', 'slug' => 'napipine'],
            ['name' => 'Marrere', 'slug' => 'marrere'],
            ['name' => 'Carrupeia', 'slug' => 'carrupeia'],
        ];

        foreach ($locations as $location) {
            Location::updateOrCreate(['slug' => $location['slug']], $location);
        }
    }
}
