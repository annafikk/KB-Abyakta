export interface LoginResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
    const res = await fetch("https://berita-desa-api2.vercel.app/api/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        throw new Error("Login gagal, periksa email/password.");
    }

    return res.json();
}
