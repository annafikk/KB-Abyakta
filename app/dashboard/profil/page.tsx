"use client";

import { useState } from "react";

export default function ProfilePage() {
    const [email, setEmail] = useState("admin2@example.com");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    async function handlePasswordChange(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        if (password !== confirmPassword) {
            setMessage("Password konfirmasi tidak cocok.");
            setLoading(false);
            return;
        }

        try {
            await new Promise((r) => setTimeout(r, 1000));
            setMessage("Password berhasil diganti.");
            setPassword("");
            setConfirmPassword("");
        } catch {
            setMessage("Gagal mengganti password.");
        } finally {
            setLoading(false);
        }
    }

    async function handleEmailChange(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            await new Promise((r) => setTimeout(r, 1000));
            setMessage("Email berhasil diganti.");
        } catch {
            setMessage("Gagal mengganti email.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="max-w-md mx-auto space-y-8">
            <h1 className="text-2xl font-bold">Profil Pengguna</h1>

            <form onSubmit={handleEmailChange} className="space-y-4">
                <h2 className="text-lg font-semibold">Ganti Email</h2>
                <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    disabled={loading}
                >
                    Simpan Email
                </button>
            </form>

            <form onSubmit={handlePasswordChange} className="space-y-4">
                <h2 className="text-lg font-semibold">Ganti Password</h2>
                <input
                    type="password"
                    placeholder="Password baru"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="Konfirmasi password baru"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    disabled={loading}
                >
                    Ganti Password
                </button>
            </form>

            {message && <p className="text-center mt-4">{message}</p>}
        </section>
    );
}
