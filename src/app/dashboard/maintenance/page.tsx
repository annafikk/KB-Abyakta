'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Maintenance() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    const handleToDashboard = () => {
        router.push('/dashboard');
    };

    return (
        <section className="p-50 flex justify-center items-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">🚧 Fitur Sedang Dibuat</h1>
                <p className="text-gray-600 mb-6">
                    Kami sedang mengembangkan fitur ini. Silakan kembali nanti ya!
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        variant="outline"
                        onClick={handleBack}
                        className="w-full sm:w-auto"
                    >
                        Kembali
                    </Button>
                    <Button
                        onClick={handleToDashboard}
                        className="w-full sm:w-auto"
                    >
                        Dashboard
                    </Button>
                </div>
            </div>
        </section>
    );

}
