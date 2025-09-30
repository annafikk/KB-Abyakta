import { Inter } from "next/font/google";
import NavbarDashboard from "@/components/navigasi/navbar/navbar-dashboard";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dashboard | Abyakta",
    description: "Halaman dashboard untuk pengelolaan Abyakta",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${inter.className} min-h-screen flex flex-col`}>
            <NavbarDashboard />
            <main className="flex-grow container mx-auto">
                {children}
            </main>
        </div>
    );
}
