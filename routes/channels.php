<?php

use App\Models\Chat;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('chats.{chat_uuid}', function ($user, $chat_uuid) {
    $chat = Chat::where('uuid', $chat_uuid)->first();
    if (!$chat) return false;
    if ($chat->participants->contains($user->id)) {
        return $user;
    }
});
