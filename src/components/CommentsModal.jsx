
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

function CommentsModal({ post, onClose, onAddComment }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(post.id, commentText);
    setCommentText("");
  };

  return (
    // ==========================================
    // 📢 COMMENTS MODAL OVERLAY (BACKGROUND BLUR)
    // ==========================================
    <div className="fixed inset-0 bg-black/80 z-50 flex items-end sm:items-center justify-center backdrop-blur-sm">
      <div className="w-full sm:max-w-md h-[75vh] bg-zinc-900 rounded-t-2xl sm:rounded-2xl flex flex-col border border-zinc-800 text-white animate-slideUp">
        
        {/* MODAL HEADER */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-800">
          <h3 className="font-semibold text-center flex-1">Comments</h3>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* COMMENTS LIST */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((c, index) => (
              <div key={index} className="flex gap-3 text-sm">
                <span className="font-semibold">{c.username}</span>
                <span className="text-zinc-300">{c.text}</span>
              </div>
            ))
          ) : (
            <p className="text-zinc-500 text-center mt-10">No comments yet. Be the first!</p>
          )}
        </div>

        {/* ADD COMMENT INPUT FORM */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-zinc-800 flex gap-2 bg-black">
          <input 
            type="text" 
            placeholder="Add a comment..." 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-zinc-500"
          />
          <button type="submit" className="text-blue-500 font-semibold p-2 hover:text-blue-400">
            <Send className="w-5 h-5" />
          </button>
        </form>

      </div>
    </div>
  );
}

export default CommentsModal;