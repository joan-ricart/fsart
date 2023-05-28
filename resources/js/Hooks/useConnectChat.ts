import { useEffect } from "react";
import { User, Chat } from "@/types";

export function useConnectChat(chat: Chat) {
    useEffect(() => {
        window.Echo.join(`chats.${chat.uuid}`)
            .here((users: User[]) => {
                console.log(
                    `Joined chat ${chat.uuid}. Present users: ${users.map(
                        (user) => user.username
                    )},`
                );
            })
            .joining((user: User) => {
                console.log(`${user.username} joined the chat.`);
            })
            .leaving((user: User) => {
                console.log(`${user.username} left the chat.`);
            })
            .error((error: any) => {
                console.error(error);
            });

        return () => {
            window.Echo.leave(`chats.${chat.uuid}`);
            console.log(`Left chat ${chat.uuid}.`);
        };
    }, []);
}
