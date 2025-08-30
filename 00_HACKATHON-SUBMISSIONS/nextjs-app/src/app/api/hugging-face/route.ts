import { InferenceClient } from "@huggingface/inference";
import * as fs from "fs/promises"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const prompt = req.headers.get("prompt")
    
    if(!prompt) {
        return NextResponse.json({"error": "no prompt provided"})
    }

    try {
        const client = new InferenceClient(process.env.HF_TOKEN);

        const image = await client.textToImage({
            provider: "auto",
            model: "Qwen/Qwen-Image",
            inputs: "Astronaut riding a horse",
            parameters: { num_inference_steps: 5 },
        });

        console.log("Write image to a file")

        const blob = new Blob([image])

        await fs.writeFile("output.png", Buffer.from(await blob.arrayBuffer()));
    } catch (e) {
        console.log(e);
    }
    return NextResponse.json({"success": true})
}