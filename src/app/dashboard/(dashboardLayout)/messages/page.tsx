"use client";
import { useGetMessagesQuery } from "@/redux/api/message.api";
import { TMessage } from "@/types";

function Message() {
  const { data } = useGetMessagesQuery(undefined);
  const messages: TMessage[] = data?.data || [];
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Messages</h1>

          {messages.length === 0 ? (
            <p className="text-gray-600">No messages found.</p>
          ) : (
            <ul className="space-y-4">
              {messages?.map((msg: TMessage) => (
                <li key={msg?._id} className="p-4 border-b border-gray-300">
                  <p>
                    <strong>Name:</strong> {msg?.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {msg?.email}
                  </p>
                  <p>
                    <strong>Message:</strong> {msg?.message}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Message;
