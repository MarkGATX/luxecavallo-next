'use client'

import gsap from "gsap";
import { useRef } from "react";
import { useMenuContext } from '@/providers/menuContext/menuContext';
import Image from 'next/image';
import styles from './mobileHeader.module.css'

import { useGSAP } from '@gsap/react';
import Link from "next/link";


export default function MobileHeader() {
    const { isMenuOpen, toggleMenu } = useMenuContext();
    const menuItemsContainerRef = useRef();


    const { contextSafe } = useGSAP();

    const slideMobileDrawer = contextSafe(() => {
        const timeline = gsap.timeline();
        toggleMenu();
        if (isMenuOpen) {
            gsap.to(menuItemsContainerRef.current, {
                top: -200,
                duration:1
            })
        } else {
            gsap.to(menuItemsContainerRef.current, {
                top: 100,
                duration:.8
            })
        }
    })

    return (
        <>
            <header className={styles.mobileHeader}  >
                <div className={styles.mobileHeaderContainer} >

                    <div className={styles.mobileBrandingContainer} >
                        <div className={styles.logoImageContainer}>
                            <img src="/images/cavallo_logo.svg" className={styles.cavalloLogoGoldMobile} alt='Luxe Cavallo Horse' >
                            </img>
                        </div>
                        <p className={`${styles.mobileTitleLight}`}>LUXE CAVALLO</p>
                    </div>
                    <div className={styles.mobileBurgerContainer} onClick={slideMobileDrawer} >

                        <svg className='icon' viewBox="0 0 100 80" width="20" height="20">
                            <rect width="100" height="15" rx="10" />
                            <rect y="30" width="100" height="15" rx="10" />
                            <rect y="60" width="100" height="15" rx="10" />
                        </svg>

                        <p>
                            {isMenuOpen ? 'close' : 'open'}
                        </p>
                    </div>
                </div>


                <div className={styles.mobileMenuItems} ref={menuItemsContainerRef}>
                    <div className={styles.mobileMenuList}>
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
                    <div className={styles.mobileMenuList}>
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


