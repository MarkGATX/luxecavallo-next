'use client'

// import cavaleLogo from '@/public/images/cavale_logo.svg'
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useMenuContext } from '@/providers/menuContext/menuContext';
// import { memo } from "react";
import Image from 'next/image';
import styles from './mobileHeader.module.css'
import { Flip } from "gsap/Flip";
import { useGSAP } from '@gsap/react';
import Link from "next/link";

gsap.registerPlugin(Flip);


export default function MobileHeader() {

    const { isMenuOpen, toggleMenu } = useMenuContext();
    const topBrandingDrawerRef = useRef()
    const overflowBrandingDrawerRef = useRef()
    const burgerContainerRef = useRef()
    const hiddenBurgerContainerRef = useRef()
    const menuItemsContainerRef = useRef();
    const mobileHeaderRef = useRef();

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
            <header className={styles.mobileHeader} ref={mobileHeaderRef} >
                <div className={styles.mobileHeaderContainer} >

                    <div className={styles.mobileBrandingContainer} ref={topBrandingDrawerRef}>
                        <div className={styles.logoImageContainer}>
                            <img src="/images/cavallo_logo.svg" className={styles.cavalloLogoGoldMobile} alt='Luxe Cavallo Horse' >
                            </img>
                        </div>
                        <p className={`${styles.mobileTitleLight}`}>LUXE CAVALLO</p>
                    </div>
                    <div className={styles.mobileBurgerContainer} onClick={slideDrawer} ref={burgerContainerRef}>

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
                <div className={styles.mobileOverflowContainer} >

                    <div className={styles.mobileBrandingContainer} ref={overflowBrandingDrawerRef}>
                        <div className={styles.logoImageContainer}>

                            <img src="/images/cavallo_logo.svg" className={styles.cavalloLogoMobile} alt='Luxe Cavallo Horse' >
                            </img>
                        </div>

                        <p className={styles.mobileTitleDark}>LUXE CAVALLO</p>
                    </div>
                    <div className={styles.mobileBurgerContainerHidden} ref={hiddenBurgerContainerRef}>
                        <svg className='icon' viewBox="0 0 100 80" width="30" height="30">
                            <rect width="100" height="15" rx="10" />
                            <rect y="30" width="100" height="15" rx="10" />
                            <rect y="60" width="100" height="15" rx="10" />
                        </svg>
                        <p>
                            {isMenuOpen ? 'Close' : 'Open'}
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
{/* <Box className='headerContainer' sx={{
                width: sideWidth,
                minHeight: '100vh',
                backgroundColor: 'headerBack.main',
                position: 'absolute',
                overflow: 'hidden',

            }}>

                <Box sx={{ width: '200px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '1em' }}>
                    <Box ref={burger} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <MenuIcon className='menuIcon' onClick={() => slideDrawer()} sx={{ color: 'headerBack.contrastText' }} />
                        <Typography variant='subtitle2' sx={{ color: 'headerBack.contrastText' }}>{menuAction}</Typography>
                    </Box>
                    <img src={cavaleLogo} ref={sideContrastHorse} alt='Gold Luxe Cavale Logo' className='cavaleLogoGold'></img>
                </Box>
                <Typography className='headerTitleLight' ref={sideContrastText} variant='h2' component='h1' sx={{ color: 'headerBack.contrastText', writingMode: 'vertical-lr', letterSpacing: '-.6em', textOrientation: 'upright', position: 'relative', left: '155px' }}>LUXE CAVALLO</Typography>
            </Box>
            <Box sx={{ position: 'absolute', minHeight: '100vh', left: sideWidth, overflow: 'hidden' }}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            backgroundColor: 'secondary.main',
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            zIndex: '-1',
                            left: '-200px',
                            position: 'absolute',
                            overflow: 'hidden',
                            justifyContent: 'space-between',
                            padding: '1rem 0 1rem 0',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <List>
                        {menuItems.map((item, index) => {
                            const text = Object.keys(item)[0];
                            const Icon = Object.values(item)[0];
                            return (
                                text === 'Home' ? (<Link key={index} to={`/`}>
                                    <ListItem disablePadding>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Icon />
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>) : (
                                    <Link key={index} to={`/${text}`}>
                                        <ListItem disablePadding>

                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Icon />
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>)
                            );
                        })}
                    </List>
                    <Toolbar />
                    <List>
                        {contactItems.map((item, index) => {
                            const text = Object.keys(item)[0];
                            const Icon = Object.values(item)[0];
                            return (
                                <Link key={index} to={`/${text}`}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Icon />
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            );
                        })}
                    </List>
                </Drawer>
                <Box ref={mainContrastHorse} sx={{ width: sideWidth, paddingTop: '1em' }}>
                    <Link to={`/`}><img src={cavaleLogo} alt='Dark Luxe Cavale Logo' className='cavaleLogo'></img></Link>
                </Box>
                <Typography className='headerTitleDark' ref={mainContrastText} variant='h2' component='h1' sx={{ color: 'text.main', writingMode: 'vertical-lr', letterSpacing: '-.6em', textOrientation: 'upright', position: 'relative', left: '-45px', fontWeight: '900' }}>LUXE CAVALLO</Typography>
            </Box>
        </>
    )
} */}

{/* export default memo(Header); */ }