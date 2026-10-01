

// // import StoriesBar from './components/Stories/StoriesBar';


// import StoryCircle from "./components/StoryCircle";


// function App() {
//   // Mock users data jo Instagram stories jaisa lage
//   const storiesList = [
//     {
//       id: 1,
//       name: "rahul_dev",
//       avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
//       hasStory: true
//     },
//     {
//       id: 2,
//       name: "priya_sharma",
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
//       hasStory: true
//     },
//     {
//       id: 3,
//       name: "neha_gupta",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//       hasStory: true
//     },
//     {
//       id: 5,
//       name: "priya_sharma",
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
//       hasStory: true
//     }
//   ];

//   return(
//     <div >
//         <h2 >Storie</h2>
//         <StoryCircle />

//     </div>
//   )

// }

// export default App;



// import React from 'react';
// import StoryCircle from './components/StoryCircle'; // Agar file same folder me hai (src ke andar)
// // Ya agar components folder ke andar hai toh: import StoryCircle from './components/StoryCircle';

// function App() {
//   // Sample data taaki hum component ko props pass kar sakein
//   const sampleUser =[
//     {
//     id: 1,
//     user: {
//       name: "Rahul Kumar",
//       avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces"
//     },
//     hasStory: true
//   },
//   {
//     id: 2,
//     user: {
//       name: "Aman",
//       avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=faces"
//     },
//     hasStory: true
//   },
//   {
//     id: 3,
//     user: {
//       name: "Neha",
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
//     },
//     hasStory: false
//   },
//   {
//     id: 4,
//     user: {
//       name: "Priya",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
//     },
//     hasStory: true
//   },
//   {
//     id: 6,
//     user: {
//       name: "Anjali",
//       avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces"
//     },
//     hasStory: true
//   }
//   ];

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Instagram Stories</h1>

//       <div className="flex gap-4 overflow-x-auto pb-2">
//         {sampleUser.map((item) => (
//           <StoryCircle 
//             key={item.id} 
//             user={item.user} 
//             hasStory={item.hasStory} 
//           />
//         ))}
//       </div>

//       {/* StoryCircle component ko yahan use karein aur props pass karein */}
//       {/* <div className="flex gap-4">
//         <StoryCircle user={sampleUser} hasStory={true} />
//         <StoryCircle user={sampleUser} hasStory={false} />
//       </div> */}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

import StoriesBar from './components/Stories/StoriesBar'; // Sahi path jahan StoriesBar.jsx hai
import Post from './components/Post';
import BottomNav from './components/BottomNav';

import CommentsModal from './components/CommentsModal';
import CreatePostModal from './components/CreatePostModal';
import MessagesPage from './components/MessagesPage';
import { PlusSquare, MessageCircle } from 'lucide-react';

// import { postsList } from './Posts.js';


function App() {
  const [postsList, setPostsList] = useState([
    {
      id: 1,
      username: "rahul_dev",
      userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      postImage: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&h=600&fit=crop",
      likes: 124,
      caption: "Beautiful morning view! 🌄✨",
      comments: [{ username: "aman", text: "Nice click!" }] // Naya comments field
    },
    {
      id: 2,
      username: "priya_sharma",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      postImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop",
      likes: 852,
      caption: "Beach vibes only 🌊🌴",
      comments: []
    },
    {
    id: 3,
    username: "rahul_verma",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    postImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60",
    likes: 1240,
    caption: "Conquering the mountains one peak at a time 🏔️🏕️",
    comments: []
  },
  {
    id: 4,
    username: "ananya_patel",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    postImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60",
    likes: 430,
    caption: "Healthy food, happy mood 🥗🥑",
    comments: []
  },
  {
    id: 5,
    username: "dev_code",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    postImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60",
    likes: 915,
    caption: "Late night coding sessions & coffee ☕💻",
    comments: []
  },
  {
    id: 6,
    username: "sneha_r",
    userAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    postImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=60",
    likes: 620,
    caption: "Golden hour magic ✨📸",
    comments: []
  },
  {
    id: 7,
    username: "trekker_amit",
    userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
    postImage: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=600&auto=format&fit=crop&q=60",
    likes: 542,
    caption: "Under the starry night sky ✨⛺",
    comments: []
  },
  {
    id: 8,
    username: "roam_with_neha",
    userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    postImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60",
    likes: 890,
    caption: "Lost in the right direction 🌲🍃",
    comments: []
  },
  {
    id: 9,
    username: "vikram_explorer",
    userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    postImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
    likes: 1420,
    caption: "Chasing waterfalls and sunsets 🌅🌊",
    comments: []
  }
  ]);

  const [activeCommentPost, setActiveCommentPost] = useState(null); // Kis post ke comments khule hain
  const [showCreateModal, setShowCreateModal] = useState(false);     // New post modal kholne ke liye
  const [showMessages, setShowMessages] = useState(false);

  const handleAddComment = (postId, text) => {
    setPostsList(postsList.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), { username: "my_profile", text }]
        };
      }
      return post;
    }));
    // Modal ke andar turant comment dikhane ke liye
    setActiveCommentPost(prev => ({
      ...prev,
      comments: [...(prev.comments || []), { username: "my_profile", text }]
    }));
  };

  // Jab koi naya post banayega, toh ye list me sabse upar add ho jayega
  const handleCreatePost = (newPost) => {
    setPostsList([newPost, ...postsList]);
  };

  

  return (
    <div className="bg-black text-white min-h-screen pb-16">
      <div className="flex justify-between items-center px-4 py-3 border-b border-zinc-800 sticky top-0 bg-black z-50">
        <h1 className="text-xl font-bold p-1 font-serif italic">Instagram</h1>
        <div className="flex gap-4 items-center text-xl">
          <button className="hover:text-zinc-400" >❤️</button>
          <button>💬</button>

          <button onClick={() => setShowCreateModal(true)} className="hover:text-zinc-400 transition" title="Create Post">
            <PlusSquare className="w-6 h-6" />
          </button>

          <button onClick={() => setShowMessages(true)} className="hover:text-zinc-400 transition" title="Messages">
            <MessageCircle className="w-6 h-6" />
          </button>

        </div>
      </div>



      {/* Yahan StoriesBar component ko dikhaya gaya hai */}
      <StoriesBar />

      <div>
        {postsList.map((post) => (
          <Post key={post.id} postData={post} onOpenComments={() => setActiveCommentPost(post)} />
        ))}
      </div>

      {activeCommentPost && (
        <CommentsModal 
          post={activeCommentPost} 
          onClose={() => setActiveCommentPost(null)} 
          onAddComment={handleAddComment}
        />
      )}

      {/* 2. Create Post Modal: Jab Plus button dabega */}
      {showCreateModal && (
        <CreatePostModal 
          onClose={() => setShowCreateModal(false)} 
          onCreatePost={handleCreatePost}
        />
      )}

      {/* 3. Messages Page: Jab Message icon dabega */}
      {showMessages && (
        <MessagesPage 
          onClose={() => setShowMessages(false)} 
        />
      )}

      <BottomNav />

    </div>
  );
}

export default App;