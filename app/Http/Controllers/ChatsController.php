<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $chats = auth()->user()->chats->load(['messages', 'participants']);
        return Inertia::render('Chats', ['chats' => $chats]);
    }
}
