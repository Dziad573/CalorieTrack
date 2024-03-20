import { useState } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar.jsx';
import styles from './Counter.module.css';

export function Counter({ style }) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [calories, setCalories] = useState(0);

    const calculateMaxCalories = () => {
        const ppm = 10 * weight + 6.25 * height + 5 * age + 5;
        return 1.2 * ppm;
    };

    const handleWeightChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            setWeight(value);
        }
    };

    const handleHeightChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            setHeight(value);
        }
    };

    const handleAgeChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            setAge(value);
        }
    };

    const handleCaloriesChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            setCalories(value);
        }
    };

    const maxDailyCalories = calculateMaxCalories();
    const percent = ((calories / maxDailyCalories) * 100);

    const maxThickness = 50;
    const minThickness = 0;
    const thickness = maxThickness - (maxThickness - minThickness) * (percent / 100);

    return (
        <div>
            <section className={styles.counter}  style={style} >
                <div className={styles.inputs}>
                    <input type="text" placeholder="Waga" value={weight} onChange={handleWeightChange} />
                    <input type="text" placeholder="Wzrost" value={height} onChange={handleHeightChange} />
                    <input type="text" placeholder="Wiek" value={age} onChange={handleAgeChange} />
                    <input
                        type="text"
                        placeholder="Kalorie"
                        value={calories}
                        onChange={handleCaloriesChange}
                    />
                </div>
                <div className={styles.progress}>
                    <ProgressBar 
                        percent={percent} 
                        thickness={thickness} 
                        maxDailyCalories={maxDailyCalories}
                        calories={calories}
                    />
                </div>
                
            </section>
        </div>
    );
}
