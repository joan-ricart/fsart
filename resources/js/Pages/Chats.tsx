import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Chat, PageProps } from "@/types";

export default function Chats({ auth, chats }: PageProps<{ chats: Chat[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Chats
                </h2>
            }
        >
            <Head title="Chats" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {chats.map((chat) => (
                        <div
                            key={chat.uuid}
                            className="mb-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                        >
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <Link href={route("chat", chat.uuid)}>
                                    {chat.uuid}
                                </Link>
                                <div>
                                    {chat.participants.map((participant) => (
                                        <div key={participant.id}>
                                            {participant.username}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
