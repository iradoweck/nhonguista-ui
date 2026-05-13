<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * List all categories
     */
    public function index()
    {
        $categories = Category::orderBy('order', 'asc')->get();
        return response()->json($categories);
    }

    /**
     * Show services for a specific category
     */
    public function show($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        return response()->json($category->load('services.user', 'services.location'));
    }
}
