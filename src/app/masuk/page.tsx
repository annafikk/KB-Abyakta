"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

import { loginUser } from "@/lib/api/auth";

export default function Masuk() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = await loginUser(email, password);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            router.push("/dashboard");
        } catch (_error) {
            setError("Email atau Kata Sandi salah!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pt-50">
            <div className="flex flex-col items-center gap-6 lg:justify-start">

                {/* Error Alert */}
                {error && (
                    <Alert variant="destructive" className="w-full max-w-sm">
                        <AlertCircleIcon className="h-5 w-5" />
                        <div className="flex flex-col">
                            <AlertTitle>Gagal Masuk</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </div>
                    </Alert>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md"
                    style={{ maxHeight: "400px", overflow: "hidden" }}
                >
                    <h1 className="text-xl font-semibold">Masuk</h1>

                    <Input
                        type="email"
                        placeholder="Email"
                        className="text-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="text-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Mohon Tunggu..." : "Masuk"}
                    </Button>
                </form>

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
