<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    /**
     * Register a contact attempt (WhatsApp redirect)
     */
    public function store(Request $request)
    {
        $request->validate([
            'service_id' => 'required|exists:services,id',
            'provider_id' => 'required|exists:users,id',
            'message' => 'nullable|string',
        ]);

        $contact = Contact::create([
            'client_id' => Auth::id(),
            'service_id' => $request->service_id,
            'provider_id' => $request->provider_id,
            'channel' => 'whatsapp',
            'message' => $request->message,
            'contacted_at' => now(),
        ]);

        return response()->json([
            'message' => 'Contacto registado com sucesso.',
            'contact' => $contact
        ], 201);
    }
}
