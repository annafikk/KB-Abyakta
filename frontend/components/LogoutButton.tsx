"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    function handleLogout() {
        document.cookie = "token=; path=/; max-age=0";
        router.push("/login");
    }

    return (
        <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
        >
            Logout
        </button>
    );
}
