"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Masuk() {
    return (
        <section className="pt-30">
            <div className="flex flex-col items-center gap-6 lg:justify-start">
                <div
                    className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md"
                    style={{ maxHeight: "400px", overflow: "hidden" }}
                >
                    <h1 className="text-xl font-semibold">Masuk</h1>

                    <Input
                        type="email"
                        placeholder="Email"
                        className="text-sm"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="text-sm"
                        required
                    />
                    <Button type="submit" className="w-full">
                        Masuk
                    </Button>
                </div>

                <div className="text-muted-foreground flex justify-center gap-1 text-sm">
                    <p>Belum punya akun?</p>
                    <a
                        href="/daftar"
                        className="text-primary font-medium hover:underline"
                        rel="noreferrer"
                    >
                        Daftar
                    </a>
                </div>
            </div>
        </section>
    );
}
