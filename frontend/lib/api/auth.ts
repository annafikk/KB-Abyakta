import { LoginResponse } from "@/lib/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
    const res = await fetch(`${API_BASE}/api/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Login gagal");
    }

    return res.json();
}

export async function registerUser(
    email: string,
    password: string
): Promise<{ success: boolean; message: string }> {
    const res = await fetch(`${API_BASE}/api/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Registrasi gagal");
    }

    return res.json();
}
