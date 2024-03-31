import { MainCounter } from '../Counter/MainCounter.jsx'
import { HomePageContent } from './HomePageContent/HomePageContent.jsx'
import { Pyramid } from './Pyramid/Pyramid.jsx'
import styles from './HomePage.module.css'


export function HomePage(){


    return(
        <>
    
            <div className={styles.container}>
                <MainCounter></MainCounter>
                
            </div>
            <HomePageContent></HomePageContent>
            <Pyramid></Pyramid>

        </>
    )
    
}