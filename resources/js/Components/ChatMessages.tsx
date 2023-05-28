import { Message } from "@/types";
import { useEffect, useState } from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";

export default function ChatMessages({ user, chat }: any) {
    const [messages, setMessages] = useState(chat.messages);

    useEffect(() => {
        window.Echo.join(`chats.${chat.uuid}`).listen(
            "MessageSent",
            (e: any) => {
                if (e.message.user_id != user.id) {
                    setMessages([...messages, e.message]);
                }
            }
        );
    }, [messages]);

    async function sendMessage(e: any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formDataAsJson = Object.fromEntries(formData.entries());

        try {
            const response = await window.axios.post(
                route("message.store", chat.uuid),
                formDataAsJson
            );
            form.reset();

            setMessages([...messages, response.data.message]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {messages.map((message: Message) => (
                <div
                    key={message.id}
                    className={`rounded mb-3 p-3 w-8/12 ${
                        user.id == message.user.id
                            ? "bg-blue-500 ml-auto"
                            : "bg-gray-500"
                    }`}
                >
                    <div>{message.user.username}</div>
                    <div>{message.created_at}</div>
                    <div>{message.content}</div>
                </div>
            ))}

            <form onSubmit={sendMessage} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="message" value="Message" />

                    <TextInput
                        id="message"
                        name="message"
                        type="text"
                        className="mt-1 block w-full"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton>Send</PrimaryButton>
                </div>
            </form>
        </>
    );
}
