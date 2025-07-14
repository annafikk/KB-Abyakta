export interface LoginResponse {
    success: boolean;
    token: string;
    user: {
        id: string;
        email: string;
        role: string;
    };
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
    const res = await fetch("https://berita-desa-api2.vercel.app/api/login/", {
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