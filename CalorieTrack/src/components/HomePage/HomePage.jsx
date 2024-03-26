import { MainCounter } from '../Counter/MainCounter.jsx'
import styles from './HomePage.module.css'

export function HomePage(){

    return(
        <>
            <div className={styles.container}>
                <MainCounter></MainCounter>

            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
            <script src="animations.js"></script>
        </>
    )
    
}