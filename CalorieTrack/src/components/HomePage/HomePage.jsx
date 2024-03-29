import { useEffect } from 'react'
import { MainCounter } from '../Counter/MainCounter.jsx'
import { runAnimations } from './Animation.js'
import cof from '../../assets/cof.jpg'
import styles from './HomePage.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export function HomePage(){
    useEffect(() => {
        runAnimations();
    }, []);

    return(
        <>
    
            <div className={styles.container}>
                <MainCounter></MainCounter>
            </div>
            
            <div className={`elementLeft ${styles.elementLeft}`}>
                <img src={cof} className={`img ${styles.img}`} alt="cof" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor eligendi ipsum, eum autem perferendis quam culpa nesciunt laborum distinctio architecto neque? Blanditiis exercitationem officiis perspiciatis illo, consequatur dolorem sequi.
                </p>     
            </div>
            <div className={`elementRight ${styles.elementRight}`}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor eligendi ipsum, eum autem perferendis quam culpa nesciunt laborum distinctio architecto neque? Blanditiis exercitationem officiis perspiciatis illo, consequatur dolorem sequi.
                </p>
                <img src={cof} className={`img ${styles.img}`} alt="cof" />
            </div>
            <div className={`elementLeft ${styles.elementLeft}`}>
                <img src={cof} className={`img ${styles.img}`} alt="cof" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor eligendi ipsum, eum autem perferendis quam culpa nesciunt laborum distinctio architecto neque? Blanditiis exercitationem officiis perspiciatis illo, consequatur dolorem sequi.
                </p>
            </div>

        </>
    )
    
}