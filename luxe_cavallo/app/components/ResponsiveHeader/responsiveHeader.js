'use client'

import { useScreenSizeContext } from '@/providers/screenSizeContext/screenSizeContext';
import dynamic from 'next/dynamic';

const HeaderDesktop = dynamic(() => import('../HeaderDesktop').then(mod => mod.default));
const HeaderMobile = dynamic(() => import('../HeaderMobile').then(mod => mod.default));

export default function ResponsiveHeader() {
    const { isDesktop } = useScreenSizeContext();
  
    return (
        isDesktop ? <HeaderDesktop /> : <HeaderMobile /> 
    )
}