import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh',
                margin: 'auto',
                padding: '0 20px',
                textAlign: 'center',
            }}
        >
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Maaf, kami tidak dapat menemukan halaman yang Anda cari.</p>
            <Link
                href="/"
                className="text-sm text-blue-600 font-medium mt-4 capitalize hover:underline"
            >
                Kembali ke Beranda
            </Link>
        </div>
    );
}
