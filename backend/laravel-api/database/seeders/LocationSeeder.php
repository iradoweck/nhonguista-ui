<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Location::create([
            'city' => 'Nampula',
            'province' => 'Nampula',
            'neighborhood' => 'Muhala',
        ]);

        Location::create([
            'city' => 'Nampula',
            'province' => 'Nampula',
            'neighborhood' => 'Napipine',
        ]);

        Location::create([
            'city' => 'Nampula',
            'province' => 'Nampula',
            'neighborhood' => 'Namutequeliua',
        ]);
    }
}
