
// 


import React from 'react';
// Kyunki yeh file 'src/components/Stories/' me hai, isliye src tak pahuchne ke liye '../..' use hoga
import StoryCircle from '../StoryCircle'; 

function StoriesBar() {
  const sampleUser = [
    {
      id: 1,
      user: {
        name: "Rahul Kumar",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces"
      },
      hasStory: true
    },
    {
      id: 2,
      user: {
        name: "Aman",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=faces"
      },
      hasStory: true
    },
    {
      id: 3,
      user: {
        name: "Neha",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
      },
      hasStory: false
    },
    {
      id: 4,
      user: {
        name: "Priya",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
      },
      hasStory: true
    },
    {
      id: 6,
      user: {
        name: "Anjali",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces"
      },
      hasStory: true
    },
    {
    id: 7,
    user: {
      name: "Kabir",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    },
    hasStory: true
  },
  {
    id: 9,
    user: {
      name: "Aarav",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    hasStory: true
  },
  {
    id: 10,
    user: {
      name: "Meera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
    },
    hasStory: true
  },
  {
    id: 11,
    user: {
      name: "Zoya",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces"
    },
    hasStory: false
  },
  {
    id: 12,
    user: {
      name: "Rohan",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces"
    },
    hasStory: true
  }
  ];

  return (
    <div className="w-full bg-black py-3 px-4 border-b border-zinc-800">
      <div className="flex gap-4 overflow-x-auto scrollbar-none">
        {sampleUser.map((item) => (
          <StoryCircle 
            key={item.id} 
            user={item.user} 
            hasStory={item.hasStory} 
          />
        ))}
      </div>
    </div>
  );
}

export default StoriesBar;