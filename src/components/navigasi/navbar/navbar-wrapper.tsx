'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';

export default function NavbarWrapper() {
    const pathname = usePathname();

    const hideNavbarRoutes = ['/masuk', '/daftar'];

    const shouldHideNavbar =
        pathname.startsWith('/dashboard') || hideNavbarRoutes.includes(pathname);

    if (shouldHideNavbar) {
        return null;
    }

    return <Navbar />;
}
