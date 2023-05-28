import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Chat, PageProps } from "@/types";
import ChatMessages from "@/Components/ChatMessages";
import { useConnectChat } from "@/Hooks/useConnectChat";

export default function ChatPage({ auth, chat }: PageProps<{ chat: Chat }>) {
    useConnectChat(chat);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Chat between{" "}
                    {chat.participants.map((participant, key) => (
                        <span key={participant.id}>
                            {participant.username} ({participant.id})
                            {key + 1 == chat.participants.length ? "" : ", "}
                        </span>
                    ))}
                </h2>
            }
        >
            <Head title="Chat" />

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <h2>{chat.uuid}</h2>

                    <ChatMessages user={auth.user} chat={chat} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
