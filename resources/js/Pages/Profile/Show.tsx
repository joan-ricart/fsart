import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps, User } from "@/types";

export default function Show({ auth, user }: PageProps<{ user: User }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Profile
                </h2>
            }
        >
            <Head title={`${user.username}'s Profile`} />

            <div className="py-12 dark:text-gray-100">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <h1>{`${user.username}'s shitty Profile`}</h1>
                    Currently {user.is_available ? "available" : "unavailable"}
                    {user.id === auth.user.id && (
                        <Link href={route("profile.edit")}>Edit profile</Link>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
