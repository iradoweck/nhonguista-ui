<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * List services with filters
     */
    public function index(Request $request)
    {
        $query = Service::with(['user', 'category', 'location', 'reviews'])
            ->where('is_active', true);

        // Filter by category
        if ($request->has('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Search by title or description
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Featured only
        if ($request->has('featured')) {
            $query->where('is_featured', true);
        }

        $services = $query->latest()->paginate($request->get('per_page', 12));

        return response()->json($services);
    }

    /**
     * Show service details
     */
    public function show($id)
    {
        $service = Service::with(['user', 'category', 'location', 'reviews.reviewer'])
            ->findOrFail($id);

        return response()->json($service);
    }
}
