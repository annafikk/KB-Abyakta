export async function loginUser(email: string, password: string) {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        throw new Error("Gagal masuk! Mohon coba beberapa saat lagi!");
    }

    return res.json();
}

export async function registerUser(name: string, email: string, password: string) {
    const res = await fetch("https://berita-desa-api2.vercel.app/api/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
        throw new Error("Gagal daftar!");
    }

    return res.json();
}
