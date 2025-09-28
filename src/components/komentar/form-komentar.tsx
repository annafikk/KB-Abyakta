"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function CommentForm() {
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        // Untuk sekarang hanya console.log
        console.log("Komentar terkirim:", content);
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Textarea
                placeholder="Tulis komentar Anda..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <Button type="submit">Kirim Komentar</Button>
        </form>
    );
}
