
import React, { useState } from 'react';

function Post({ postData }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-black text-white border-b border-zinc-800 pb-4 mb-3">
      {/* Post Header (User Info) */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <img 
            src={postData.userAvatar} 
            alt="avatar" 
            className="w-8 h-8 rounded-full border border-pink-500 object-cover" 
          />
          <span className="text-sm font-semibold">{postData.username}</span>
        </div>
        <span className="text-zinc-400 font-bold">...</span>
      </div>

      {/* Post Image */}
      <div className="w-full bg-zinc-900">
        <img 
          src={postData.postImage} 
          alt="post" 
          className="w-full max-h-[450px] object-cover" 
        />
      </div>

      {/* Post Actions (Like, Comment, Share) */}
      <div className="flex items-center justify-between px-3 pt-3">
        <div className="flex items-center gap-4 text-xl">
          <button onClick={() => setIsLiked(!isLiked)} className="focus:outline-none">
            {isLiked ? "❤️" : "🤍"}
          </button>
          <button>💬</button>
          <button>✈️</button>
        </div>
        <div>
          <button>🔖</button>
        </div>
      </div>

      {/* Likes & Caption */}
      <div className="px-3 pt-2 text-sm">
        <p className="font-semibold mb-1">{isLiked ? postData.likes + 1 : postData.likes} likes</p>
        <p>
          <span className="font-semibold mr-2">{postData.username}</span>
          <span className="text-zinc-200">{postData.caption}</span>
        </p>
      </div>
    </div>
  );
}

export default Post;