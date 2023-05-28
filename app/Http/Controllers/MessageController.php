<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Models\Chat;
use App\Models\Message;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request, string $chat_uuid)
    {
        $chat = Chat::where('uuid', $chat_uuid)->first();

        $message = Message::create([
            'user_id' => auth()->user()->id,
            'chat_id' => $chat->id,
            'content' => $request->message,
        ]);

        MessageSent::dispatch($message->load('user'));

        return response()->json(['message' => $message], 201);
    }
}
