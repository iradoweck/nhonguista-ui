<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    /**
     * Registar um novo utilizador
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'phone' => 'required|string|unique:users',
            'password' => 'required|string|min:6',
            'role' => 'sometimes|string|in:client,provider'
        ]);

        return DB::transaction(function () use ($request) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password),
                'is_active' => true,
            ]);

            // Assign role
            $roleSlug = $request->role ?? 'client';
            $user->assignRole($roleSlug);

            return response()->json([
                'user' => $user->load('roles'),
                'token' => $user->createToken('auth_token')->plainTextToken,
            ], 201);
        });
    }

    /**
     * Autenticar utilizador e gerar token
     */
    public function login(Request $request)
    {
        $request->validate([
            'phone' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('phone', $request->phone)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'phone' => ['As credenciais fornecidas estão incorretas.'],
            ]);
        }

        return response()->json([
            'user' => $user->load('roles'),
            'token' => $user->createToken('auth_token')->plainTextToken,
        ]);
    }

    /**
     * Obter os dados do utilizador autenticado
     */
    public function me(Request $request)
    {
        return response()->json($request->user()->load('roles'));
    }

    /**
     * Encerrar a sessão do utilizador
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Sessão encerrada com sucesso.'
        ]);
    }
}
