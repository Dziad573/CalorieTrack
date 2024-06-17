import styles from "./Hero.module.css";
//import hero from "../../assets/hero.png";

export function Hero(){
    return(
        <div className={styles.hero}>
            <h1>Calorie Tracker</h1>
            <h2>Track your daily calorie intake and maintain a healthy lifestyle</h2>
        </div>
    )

}