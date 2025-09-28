"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Daftar() {
    return (
        <section className="pt-20">
            <div className="flex flex-col items-center gap-6 lg:justify-start">
                <div
                    className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md"
                    style={{ maxHeight: "500px", overflow: "hidden" }}
                >
                    <h1 className="text-xl font-semibold">Daftar</h1>

                    <Input
                        type="text"
                        placeholder="Nama Lengkap"
                        className="text-sm"
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        className="text-sm"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Kata Sandi"
                        className="text-sm"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Konfirmasi Kata Sandi"
                        className="text-sm"
                        required
                    />
                    <Button type="submit" className="w-full">
                        Daftar
                    </Button>
                </div>

                <div className="text-muted-foreground flex justify-center gap-1 text-sm">
                    <p>Sudah punya akun?</p>
                    <a
                        href="/masuk"
                        className="text-primary font-medium hover:underline"
                        rel="noreferrer"
                    >
                        Masuk
                    </a>
                </div>
            </div>
        </section>
    );
}
