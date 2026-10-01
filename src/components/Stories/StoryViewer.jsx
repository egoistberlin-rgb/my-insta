
function StoryViewer(){
    return(
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="relative w-full max-w-sm h-[80vh] bg-gray-800 rounded-1g">
                <div className="flex justify-between p-3 text-white">
                    <div className="flex gap-2 items-center">
                        <img src={users.avatar} className="w-8 h-8 rounded-full" />
                        <span className="text-sm">{users.name}</span>

                    </div>
                    <button onClick={onClose}><i class="fa-solid fa-xmark"></i></button>

                </div>
                <img src={users.avatar} className="w-full h-[70vh] object-cover" />

            </div>

        </div>
    )
}

export default StoryViewer;