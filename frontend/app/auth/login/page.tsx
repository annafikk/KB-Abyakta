"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Login gagal");
            }

            const data = await res.json();

            document.cookie = `token=${data.token}; path=/; max-age=86400; SameSite=Lax`;

            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message || "Terjadi kesalahan");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit}
                className="max-w-md w-full bg-white p-8 rounded shadow"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

                {error && (
                    <div className="mb-4 text-red-600 font-medium text-center">{error}</div>
                )}

                <label className="block mb-2 font-semibold">Email</label>
                <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label className="block mb-2 font-semibold">Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded disabled:opacity-50"
                >
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    );
}
