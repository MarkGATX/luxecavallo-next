'use client'

// import cavaleLogo from '@/public/images/cavale_logo.svg'
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useMenuContext } from '@/providers/menuContext/menuContext';
// import { memo } from "react";
// import Image from 'next/image';
import styles from './desktopHeader.module.css'
import { Flip } from "gsap/Flip";
import { useGSAP } from '@gsap/react';
import Link from "next/link";

gsap.registerPlugin(Flip);


export default function DesktopHeader() {

    const { isMenuOpen, toggleMenu } = useMenuContext();
    const topBrandingDrawerRef = useRef()
    const overflowBrandingDrawerRef = useRef()
    const burgerContainerRef = useRef()
    const hiddenBurgerContainerRef = useRef()
    const menuItemsContainerRef = useRef();
    const desktopHeaderRef = useRef();

    const { contextSafe } = useGSAP();

    const slideDrawer = contextSafe(() => {
        const timeline = gsap.timeline();
        toggleMenu();
        const topBrandingDrawerState = Flip.getState(topBrandingDrawerRef.current)
        const overflowBrandingDrawerState = Flip.getState(overflowBrandingDrawerRef.current)
        const burgerContainerState = Flip.getState(burgerContainerRef.current)
        const menuItemsContainerState = Flip.getState(menuItemsContainerRef.current)
        topBrandingDrawerRef.current.classList.toggle(`${styles.drawerOpen}`)
        overflowBrandingDrawerRef.current.classList.toggle(`${styles.drawerOpen}`)
        burgerContainerRef.current.classList.toggle(`${styles.burgerOpen}`)
        menuItemsContainerRef.current.classList.toggle(`${styles.menuOpen}`)
        timeline.add(Flip.from(topBrandingDrawerState, { duration: 0.5 }), "start");
        timeline.add(Flip.from(overflowBrandingDrawerState, { duration: 0.5 }), "start");
        timeline.add(Flip.from(burgerContainerState, { duration: 0.5 }), "start");
        timeline.add(Flip.from(menuItemsContainerState, { duration: 0.5 }), "start");

    })

    // useGSAP(() => {
    //        gsap.to(desktopHeaderRef.current, {
    //                 opacity: 0},
    //                 {
    //                 opacity:1,
    //                 duration: 1,
    //                 ease: "power2.out",
    //                 overwrite: "auto",
    //               });
    // })

    return (
        <>
            <header className={styles.desktopHeader} ref={desktopHeaderRef} >
                <div className={styles.headerContainer} >
                    <div className={styles.burgerContainer} onClick={slideDrawer} ref={burgerContainerRef}>
                        <svg className='icon' viewBox="0 0 100 80" width="30" height="30">
                            <rect width="100" height="15" rx="10" />
                            <rect y="30" width="100" height="15" rx="10" />
                            <rect y="60" width="100" height="15" rx="10" />
                        </svg>
                        <p>
                            {isMenuOpen ? 'close' : 'open'}
                        </p>
                    </div>
                    <div className={styles.brandingContainer} ref={topBrandingDrawerRef}>
                        <img src="/images/cavallo_logo.svg" className={styles.cavalloLogoGold} alt='Luxe Cavallo Horse' >
                        </img>
                        <p className={`${styles.lightTitle} verticalText`}>LUXE CAVALLO</p>
                    </div>

                </div>
                <div className={styles.overflowContainer} >
                    <div className={styles.burgerContainerHidden} ref={hiddenBurgerContainerRef}>
                        <svg className='icon' viewBox="0 0 100 80" width="30" height="30">
                            <rect width="100" height="15" rx="10" />
                            <rect y="30" width="100" height="15" rx="10" />
                            <rect y="60" width="100" height="15" rx="10" />
                        </svg>
                        <p>
                            {isMenuOpen ? 'Close' : 'Open'}
                        </p>
                    </div>
                    <div className={styles.brandingContainer} ref={overflowBrandingDrawerRef}>
                        <img src="/images/cavallo_logo.svg" className={styles.cavalloLogo} alt='Luxe Cavallo Horse' >
                        </img>

                        <p className={`${styles.darkTitle} verticalText`}>LUXE CAVALLO</p>
                    </div>
                </div>

                <div className={styles.menuItems} ref={menuItemsContainerRef}>
                    <div className={styles.menuList}>
                        <ul>
                            <li>
                                <Link href="/" className={styles.fullWidthLink}>home</Link>
                            </li>
                            <li>men</li>
                            <li>women</li>
                            <li>accessories</li>
                            <li>houseware</li>
                        </ul>
                    </div>
                    <div className={styles.menuList}>
                        <ul>
                            <li>sizing</li>
                            <li>about</li>
                            <li>contact</li>

                        </ul>
                    </div>
                </div>

            </header>
        </>
    )
}