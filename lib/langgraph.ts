import {ChatAnthropic} from "@langchain/anthropic";

const initialiseModel = () => {
    const model = new ChatAnthropic({
        modelName: "claude-3-5-haiku-20241022",
        anthropicApiKey:process.env.ANTHROPIC_API_KEY,
        temperature:0.7,
        maxTokens:4096,
        streaming:true,
        clientOptions:{
            defaultHeaders: {
                "anthropic-beta":"prompt-caching-2024-07-31",
            },
        },
        callbacks:[
            {
                handleLLMStart: async () => {
                 
                    
                },
                handleLLMEnd: async (output) => {
                    console.log("starting llm call", output);
                    const usage = output.llmOutput?.usage;

                    if(usage){

                    }
                }
            }
        ]
    }).bindTools();

    return model;
}