<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Service;
use App\Models\Location;
use App\Models\ProviderProfile;
use Illuminate\Http\Request;
use Carbon\Carbon;

class StatsController extends Controller
{
    public function index()
    {
        // Nhonguers (Clientes)
        $nhonguers = User::whereHas('roles', function($q) {
            $q->where('slug', 'client');
        })->count();

        // Nhonguistas (Provedores Free)
        $nhonguistas = ProviderProfile::where('plan', 'free')->count();

        // Nhonguista Pro (Premium)
        $nhonguistaPro = ProviderProfile::where('plan', 'pro')->count();

        // Nhonga (Serviços)
        $nhonga = Service::count();

        // Províncias (Contagem de províncias únicas nas localizações)
        $provincias = Location::distinct('province')->count();
        if ($provincias === 0) $provincias = 1; // Default para Nampula se vazio

        // Tempo no mercado (Projeto começou 12/05/2026)
        $startDate = Carbon::parse('2026-05-12');
        $now = Carbon::now();
        
        $diffInDays = (int) $startDate->diffInDays($now);
        $diffInWeeks = (int) $startDate->diffInWeeks($now);
        $diffInMonths = (int) $startDate->diffInMonths($now);
        $diffInYears = (int) $startDate->diffInYears($now);

        $timeValue = $diffInDays;
        $timeUnit = 'Dia' . ($diffInDays != 1 ? 's' : '');

        if ($diffInYears >= 1) {
            $timeValue = $diffInYears;
            $timeUnit = 'Ano' . ($diffInYears != 1 ? 's' : '');
        } elseif ($diffInMonths >= 1) {
            $timeValue = $diffInMonths;
            $timeUnit = 'Mês' . ($diffInMonths != 1 ? 'es' : '');
        } elseif ($diffInWeeks >= 1) {
            $timeValue = $diffInWeeks;
            $timeUnit = 'Semana' . ($diffInWeeks != 1 ? 's' : '');
        }

        // Mapeamento manual de meses para garantir Português
        $meses = [
            1 => 'Janeiro', 2 => 'Fevereiro', 3 => 'Março', 4 => 'Abril',
            5 => 'Maio', 6 => 'Junho', 7 => 'Julho', 8 => 'Agosto',
            9 => 'Setembro', 10 => 'Outubro', 11 => 'Novembro', 12 => 'Dezembro'
        ];
        $launchDateFormatted = $startDate->day . ' de ' . $meses[$startDate->month] . ' de ' . $startDate->year;

        return response()->json([
            'nhonguers' => $nhonguers,
            'nhonguistas' => $nhonguistas,
            'nhonguista_pro' => $nhonguistaPro,
            'nhonga' => $nhonga,
            'provincias' => $provincias,
            'launch_date' => $launchDateFormatted,
            'time_in_market' => [
                'value' => $timeValue,
                'unit' => $timeUnit
            ]
        ]);
    }
}
