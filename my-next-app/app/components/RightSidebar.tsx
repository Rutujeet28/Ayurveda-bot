"use client";

import { useState } from "react";
import { FiSend, FiPaperclip } from "react-icons/fi";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  name?: string;
};

type RightSidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function RightSidebar({ isOpen, onToggle }: RightSidebarProps) {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! How can I help you today?",
      sender: "bot",
      name: "Bot",
    },
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      name: "You",
    };

    setMessages([newMessage, ...messages]);
    setInputText("");

    setTimeout(() => {
      setMessages((prev) => [
        {
          id: Date.now() + 1,
          text: `Bot reply to: "${newMessage.text}"`,
          sender: "bot",
          name: "Bot",
        },
        ...prev,
      ]);
    }, 500);
  };

  return (
    <>
      {/* === Floating Chat Text + Image Button === */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
        <span className="mb-1 px-3 py-1 rounded-full bg-white shadow-md text-sm font-semibold text-gray-900">
          {isOpen ? "Close" : "Chat"}
        </span>

        <img
          src="/chatbot.png"
          alt="Chatbot" 
          className={`
            w-16 h-16 cursor-pointer
            transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
            animate-bounce
          `}
          onClick={onToggle}
        />
      </div>

      {/* === Sidebar Always Between Nav & Footer === */}
            <aside
        className={`
          fixed right-0 z-40 w-80 bg-gray-100 border-l shadow-lg
          transform transition-transform duration-300
          top-[var(--nav-height)]
          bottom-[var(--footer-height)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        <div className="flex flex-col h-full p-4 text-black">
          <h2 className="font-bold text-lg mb-2">Chat</h2>

          {/* Input */}
          <div className="relative mb-4 flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="
                flex-1 pr-20 pl-3 py-2 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 text-black
              "
            />

            <label className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer">
              <span className="text-gray-600">
                <FiPaperclip size={20} />
              </span>
              <input type="file" className="hidden" />
            </label>

            <button
              onClick={handleSend}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500"
            >
              <FiSend size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-start" : "items-end"
                }`}
              >
                <span className="text-xs text-gray-500">{msg.name}</span>

                <div
                  className={`
                    px-3 py-2 rounded-lg max-w-[80%]
                    ${msg.sender === "user"
                      ? "bg-blue-100 rounded-tl-none"
                      : "bg-green-200 rounded-tr-none"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
