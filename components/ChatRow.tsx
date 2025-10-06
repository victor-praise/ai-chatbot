import { Doc, Id } from "@/convex/_generated/dataModel";
import { NavigationContext } from "@/lib/NavigationProvider";
import { useRouter } from "next/navigation";
import { use } from "react";

function ChatRow({chat, onDelete}:{chat:Doc<"chats">; onDelete: (id: Id<"chats">)=>void}){

    const router = useRouter();
    const {closeMobileNav} = use(NavigationContext);

    const handleClick = () => {
        router.push(`/dashboard/chat/${chat._id}`);
        closeMobileNav();
    }
    return <div className="group rounded-xl border border-gray-200/30 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md" onClick={handleClick}>{chat.title}
    <div className="p-4">
        <div className="flex justify-between items-start">
            chat
        </div>
        {/* {lastMessage && (<p className="text-x5 text-gray-400 mt-1.5 font-medium"><TimeAgo date={lastMessage.createdAt} /></p>)} */}
    </div>
    </div>
}

export default ChatRow;