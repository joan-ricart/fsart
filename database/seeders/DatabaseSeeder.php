<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()
            ->afterCreating(function ($user) {
                \App\Models\Chat::factory()
                    ->create();
            })
            ->create([
                'username' => 'yuyu1111',
                'first_name' => 'Joan',
                'last_name' => 'Ricart',
                'email' => 'j.ricartt@gmail.com'
            ]);

        \App\Models\User::factory(10)
            ->afterCreating(function ($user) {
                \App\Models\Chat::factory()
                    ->create();
            })
            ->create();

        foreach (\App\Models\Chat::all() as $chat) {
            $random_users = \App\Models\User::inRandomOrder()->limit(2)->get();

            foreach ($random_users as $user) {
                $user->chats()->attach($chat->id);
                \App\Models\Message::factory(4)
                    ->state(new Sequence(
                        fn (Sequence $sequence) => [
                            'user_id' => $user->id,
                            'chat_id' => $chat->id
                        ],
                    ))
                    ->create();
            }
        }
    }
}
