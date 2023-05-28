<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $chat_uuid)
    {
        $chat = Chat::with([
            'participants',
            'messages.user' => fn ($q) => $q->orderByDesc('created_at')
        ])->where('uuid', $chat_uuid)->first();
        return Inertia::render('Chat', ['chat' => $chat]);
    }
}
