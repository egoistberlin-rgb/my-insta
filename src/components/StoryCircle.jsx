
function StoryCircle({user,hasStory}) {
   
    return(
        <div className="flex flex-col items-center gap-1 min-w-[66px] cursor-pointer">
            <div className={`p-[2px] rounded-full ${hasStory? "bg-gradient-to-tr from-yellow-400 to-pink-600":""}`}>
                <img src={user.avatar} className="w-14 h-14 rounded-full border-2 border-white" />
            </div>
            <span className="text-xs">{user.name.slice(0,8)}</span>

        </div>
    )
    
}
export default StoryCircle;

