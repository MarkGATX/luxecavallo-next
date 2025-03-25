'use client'

import { useScreenSizeContext } from '@/providers/screenSizeContext/screenSizeContext';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const HeaderDesktop = dynamic(() => import('../HeaderDesktop').then(mod => mod.default));
const HeaderMobile = dynamic(() => import('../HeaderMobile').then(mod => mod.default));

export default function ResponsiveHeader({onLoad}) {
    const { isDesktop } = useScreenSizeContext();

    useEffect(() => {
        onLoad();
      }, [onLoad]);
  
    return (
        isDesktop ? <HeaderDesktop /> : <HeaderMobile /> 
    )
}