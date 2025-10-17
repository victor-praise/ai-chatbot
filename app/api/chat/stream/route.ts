import { getConvexClient } from "@/lib/convex";
import { ChatRequestBody } from "@/lib/type";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const {userId} = await auth(); 
        if(!userId){
            return new Response("Unauthorized", {status:401});
        }

        const body = (await req.json()) as ChatRequestBody;
        const {messages, newMessage, chatId} = body;

        const convex = getConvexClient();
    } catch (error) {
        return NextResponse.json({error:"Failed to process chat request"} as const,
            {status: 500}
        )
    }
}