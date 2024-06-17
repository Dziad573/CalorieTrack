import { useEffect, useState } from 'react';
import { runAnimations } from '../Pyramid/Animation.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContentComponent } from '../ContentComponent/ContentComponent.jsx';
import styles from './HomePageContent.module.css';
import firstImg from '../../../assets/firstImg.png';
import secondImg from '../../../assets/secondImg.png';
import thirdImg from '../../../assets/thirdImg.png';
import fourthImg from '../../../assets/fourthImg.png';

gsap.registerPlugin(ScrollTrigger);

export function HomePageContent() {
    const [showImage, setShowImage] = useState(window.innerWidth >= 760);

    useEffect(() => {
        runAnimations();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setShowImage(window.innerWidth >= 760);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const elements = [
        {
            content: (
                <div className={styles.containerElement}>
                    {showImage && <img src={firstImg} className={`imgHoverAnim`} alt="cof" />}
                    <div className={styles.homePageContent}>
                        <ContentComponent id={1}/>
                    </div>
                </div>
            ),
            className: `elementLeft ${styles.elementLeft}`
        },
        {
            content: (
                <div className={styles.containerElement}>
                    <div className={styles.homePageContent}>
                        <ContentComponent id={2}/>
                    </div>
                    {showImage && <img src={secondImg} className={`imgHoverAnim`} alt="cof" />}
                </div>
            ),
            className: `elementRight ${styles.elementRight}`
        },
        {
            content: (
                <div className={styles.containerElement}>
                    {showImage && <img src={thirdImg} className={`imgHoverAnim`} alt="cof" />}
                    <div className={styles.homePageContent}>
                        <ContentComponent id={3}/>
                    </div>
                </div>
            ),
            className: `elementLeft ${styles.elementLeft}`
        },
        {
            content: (
                <div className={styles.containerElement}>
                    <div className={styles.homePageContent}>
                        <ContentComponent id={4}/>
                    </div>
                    {showImage && <img src={fourthImg} className={`imgHoverAnim`} alt="cof" />}
                </div>
            ),
            className: `elementRight ${styles.elementRight}`
        },
    ];

    return (
        <>
            {elements.map((element, index) => (
                <div key={index} className={styles.container}>
                    <div className={`${element.className}`}>
                        {element.content}
                    </div>
                </div>
            ))}
        </>
    );
}

