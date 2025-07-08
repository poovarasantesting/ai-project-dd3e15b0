import { useState, useEffect, useRef } from "react";
import { Send, LogOut, User } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type Message = {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-msg",
      text: "Welcome to the chat! 👋",
      sender: "other",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMsg: Message = {
      id: `msg-${Date.now()}-user`,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setNewMessage("");
    
    // Simulate response after a short delay
    setTimeout(() => {
      const responseMsg: Message = {
        id: `msg-${Date.now()}-other`,
        text: getRandomResponse(),
        sender: "other",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, responseMsg]);
    }, 1000);
  };

  const getRandomResponse = () => {
    const responses = [
      "That's interesting!",
      "Tell me more about that.",
      "I see what you mean.",
      "How does that make you feel?",
      "Thanks for sharing that with me.",
      "I appreciate your perspective.",
      "That's a great point!",
      "I hadn't thought about it that way before.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="p-4 bg-white shadow">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <h1 className="text-xl font-bold">Chat App</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="p-2 mr-2 text-white bg-indigo-600 rounded-full">
                <User size={16} />
              </div>
              <span className="font-medium">{user?.name}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center px-3 py-1 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50"
            >
              <LogOut size={16} className="mr-1" />
              Logout
            </button>
          </div>
        </div>
      </header>
      
      {/* Chat Container */}
      <div className="flex-1 max-w-4xl p-4 mx-auto overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 text-right ${
                  message.sender === "user" ? "text-indigo-200" : "text-gray-500"
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Message Input */}
      <div className="p-4 bg-white border-t">
        <form onSubmit={handleSendMessage} className="flex max-w-4xl mx-auto">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}