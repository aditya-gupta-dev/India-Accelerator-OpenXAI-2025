'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
    const [prompt, setPrompt] = useState<string>("");

    const generate = async () => {
        const response = await fetch("/api/hugging-face", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "prompt": prompt 
            },
            body: JSON.stringify({ prompt })
        });
        
        setPrompt(JSON.stringify(await response.json()))   
    }
    return (
        <div className="p-4">
            <Input
                value={prompt || ""}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Enter your prompt..."
            />
            <Button onClick={generate}>
                Generate
            </Button>
        </div>
    )
}