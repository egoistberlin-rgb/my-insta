
// import React from 'react';

// function BottomNav() {
//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 flex justify-around items-center py-3 text-2xl z-50">
//       <button className="focus:scale-110 transition">🏠</button>
//       <button className="focus:scale-110 transition">🔍</button>
//       <button className="focus:scale-110 transition">➕</button>
//       <button className="focus:scale-110 transition">🎬</button>
//       <button className="focus:scale-110 transition">👤</button>
//     </div>
//   );
// }

// export default BottomNav; // Ya export default BottomNav;








import React from 'react';
import { Home, Search, PlusSquare, Clapperboard, User } from 'lucide-react';

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 flex justify-around items-center py-3 z-50">
      
      {/* Home Button */}
      <button className="text-zinc-400 hover:text-white focus:scale-110 transition-all duration-200">
        <Home className="w-6 h-6" />
      </button>

      {/* Search Button */}
      <button className="text-zinc-400 hover:text-white focus:scale-110 transition-all duration-200">
        <Search className="w-6 h-6" />
      </button>

      {/* Add / Create Button */}
      <button className="text-zinc-400 hover:text-white focus:scale-110 transition-all duration-200">
        <PlusSquare className="w-6 h-6" />
      </button>

      {/* Reels / Video Button */}
      <button className="text-zinc-400 hover:text-white focus:scale-110 transition-all duration-200">
        <Clapperboard className="w-6 h-6" />
      </button>

      {/* Profile Button */}
      <button className="text-zinc-400 hover:text-white focus:scale-110 transition-all duration-200">
        <User className="w-6 h-6" />
      </button>

    </div>
  );
}

export default BottomNav;
