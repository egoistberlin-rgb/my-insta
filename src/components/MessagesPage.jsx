
import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';

function MessagesPage({ onClose }) {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([
    { sender: "other", text: "Hey! How is the project going?" },
    { sender: "me", text: "Going great, just working on components!" }
  ]);

  const chats = [
    { id: 1, name: "Rahul Kumar", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop", lastMsg: "How is the project going?" },
    { id: 2, name: "Priya Sharma", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", lastMsg: "See you tomorrow!" }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessages([...messages, { sender: "me", text: messageText }]);
    setMessageText("");
  };

  return (
    // ==========================================
    // 📢 FULL MESSAGING CHAT WINDOW & LIST
    // ==========================================
    <div className="fixed inset-0 bg-black z-50 flex flex-col text-white">
      {selectedChat ? (
        // CHAT WINDOW SCREEN
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 p-4 border-b border-zinc-800 bg-zinc-900">
            <button onClick={() => setSelectedChat(null)}><ArrowLeft className="w-6 h-6"/></button>
            <img src={selectedChat.avatar} className="w-8 h-8 rounded-full object-cover" />
            <span className="font-semibold">{selectedChat.name}</span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${m.sender === 'me' ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-zinc-800 flex gap-2 bg-zinc-900">
            <input 
              type="text" 
              placeholder="Message..." 
              value={messageText} 
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1 bg-black border border-zinc-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none" 
            />
            <button type="submit" className="text-blue-500 p-2"><Send className="w-5 h-5"/></button>
          </form>
        </div>
      ) : (
        // CHATS LIST SCREEN
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900">
            <button onClick={onClose}><ArrowLeft className="w-6 h-6"/></button>
            <h2 className="font-bold text-lg">Direct Messages</h2>
            <div className="w-6"></div>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {chats.map(chat => (
              <div key={chat.id} onClick={() => setSelectedChat(chat)} className="flex items-center gap-3 p-3 hover:bg-zinc-900 rounded-xl cursor-pointer transition">
                <img src={chat.avatar} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm">{chat.name}</h4>
                  <p className="text-xs text-zinc-400">{chat.lastMsg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagesPage;