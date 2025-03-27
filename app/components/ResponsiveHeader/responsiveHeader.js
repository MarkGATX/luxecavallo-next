'use client'

import { useScreenSizeContext } from '@/providers/screenSizeContext/screenSizeContext';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const DesktopHeader = dynamic(() => import('../DesktopHeader'), { ssr: false });
const HeaderMobile = dynamic(() => import('../MobileHeader'), { ssr: false });

export default function ResponsiveHeader({ onLoad }) {
    const { isDesktop } = useScreenSizeContext();

    useEffect(() => {
        onLoad();
    }, [onLoad]);

    return (
        isDesktop ? <DesktopHeader /> : <HeaderMobile />
    )
}