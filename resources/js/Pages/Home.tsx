import { Link, Head } from "@inertiajs/react";
import { PageProps, User } from "@/types";

export default function Home({ auth, users }: PageProps<{ users: User[] }>) {
    return (
        <>
            <Head title="Home" />

            <aside className="fixed left-0 top-0 h-screen w-64">
                <div className="h-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-800">
                    <nav>
                        <Link
                            href={route("dashboard")}
                            className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href={route("chats")}
                            className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            Chats
                        </Link>
                        <Link
                            href={route("profile.edit")}
                            className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                            Profile
                        </Link>
                    </nav>
                </div>
            </aside>

            <main className="ml-64 min-h-screen bg-white p-4 dark:bg-gray-700 dark:text-white">
                {users.map((user) => (
                    <div key={user.username}>
                        <Link href={route("profile.show", user.username)}>
                            {user.username}'s profile
                        </Link>
                    </div>
                ))}
            </main>
        </>
    );
}
