import { Id } from "@/convex/_generated/dataModel";
import { getConvexClient } from "@/lib/convex";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


interface ChatPageProps{
    params:Promise<{
        chatId: Id<"chats">;
    }>;
}

async function ChatPage({params}: ChatPageProps) {
    const {chatId} = await params;


    const {userId} = await auth();

    if(!userId){
        redirect("/");
    }

    const convex = getConvexClient();
    
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage