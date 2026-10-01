
import React, { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

function CreatePostModal({ onClose, onCreatePost }) {
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageUrl) return alert("Please enter an image URL!");
    
    // Naya post object backend format me
    onCreatePost({
      id: Date.now(),
      username: "my_profile",
      userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      postImage: imageUrl,
      likes: 0,
      caption: caption,
      comments: []
    });
    onClose();
  };

  return (
    // ==========================================
    // 📢 CREATE POST POPUP MODAL
    // ==========================================
    <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-2xl">
        
        <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3">
          <h2 className="font-bold text-lg">Create New Post</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white"><X className="w-5 h-5"/></button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Image URL (Unsplash/Direct link)</label>
            <div className="flex items-center gap-2 bg-black border border-zinc-700 rounded-xl px-3 py-2">
              <ImageIcon className="w-5 h-5 text-zinc-500" />
              <input 
                type="text" 
                placeholder="https://images.unsplash.com/..." 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="bg-transparent w-full text-sm focus:outline-none text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-zinc-400 mb-1">Caption</label>
            <textarea 
              placeholder="Write a caption..." 
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm focus:outline-none text-white h-24 resize-none"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-2.5 rounded-xl font-semibold transition">
            Share Post
          </button>
        </form>

      </div>
    </div>
  );
}

export default CreatePostModal;



