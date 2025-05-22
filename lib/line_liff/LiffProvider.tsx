'use client';

import { useEffect, useState } from 'react';
import { liff } from '@line/liff';
import CONFIG_LINE_LIFF from '@/lib/line_liff/config';

export function LiffProvider({ children }: { children: React.ReactNode }) {
    const classCenter = 'flex items-center justify-center h-screen';
    const [isReady, setIsReady] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initLiff = async () => {
            try {
                await liff.init({ liffId: CONFIG_LINE_LIFF.LIFF_ID });

                if (!liff.isLoggedIn() && !liff.isInClient()) {
                    liff.login();
                }

                const profile = await liff.getProfile();
                console.log('Profile: ', profile);

                setIsReady(true);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to initialize LIFF');
            }
        };

        initLiff();
    }, []);

    if (error) {
        return <div className={classCenter}>Error: {error}</div>;
    }

    return isReady ? <>{children}</> : <div className={classCenter}>Loading...</div>;
}
