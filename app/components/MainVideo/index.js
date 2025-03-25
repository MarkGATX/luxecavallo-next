'use client'
import { useEffect, useRef } from 'react';
import styles from './mainVideo.module.css'

export default function MainVideo({ headerLoaded }) {
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current || !videoContainerRef.current) return;

        const playVideo = async () => {
            try {
                if (headerLoaded) {
                    // Add event listener before attempting to play
                    videoRef.current.addEventListener('play', () => {
                        setTimeout(() => {
                            videoContainerRef.current.classList.add(styles.playing);
                        }, 5000); // 5 second delay before fading out the poster
                    }, { once: true });

                    setTimeout(async () => {
                        await videoRef.current.play();
                    }, 500); // 0.5 second delay before starting the video
                }
            } catch (error) {
                console.error("Error playing video:", error);
            }
        };

        playVideo();
    }, [headerLoaded]);

    return (
        <div className={styles.videoWrapper} ref={videoContainerRef}>
            <video
                ref={videoRef}
                muted
                loop
                id="splashVid"
                poster='/images/cavallo_bg_mov_fallback.webp'
            >
                <source src='/images/cavallo_bg_vid6.webm' type="video/webm" />
                <source src='/images/cavallo_bg_vid5.mp4' type="video/mp4" />
            </video>
        </div>
    );
}
