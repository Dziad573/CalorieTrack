import { useState } from 'react'
import styles from './MainCounter.module.css'

export function MainCounter({ style }) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const calculateMaxCalories = () => {
        const ppmmen = 10 * weight + 6.25 * height + 5 * age + 5;
        const ppmwomen = 10 * weight + 6.25 * height + 5 * age - 161;
        if(gender === "men"){
            return ppmmen;
        }else if(gender === "women"){
            return ppmwomen;
        }
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

    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender);
    }

    let maxDailyCalories = null;
    
    if(weight && height && age){
        maxDailyCalories = calculateMaxCalories();
    }
    

    return (
        <div>
            <section className={styles.counter} style={style} >
                <div className={styles.inputs}>
                    <input type="text" placeholder="Waga" value={weight} onChange={handleWeightChange} />
                    <input type="text" placeholder="Wzrost" value={height} onChange={handleHeightChange} />
                    <input type="text" placeholder="Wiek" value={age} onChange={handleAgeChange} />
                </div>
                <div className={styles.inputs}>
                    
                    <button 
                        className={gender === "men" ? styles.selectedButton : styles.button} 
                        onClick={() => handleGenderChange("men")}
                    >
                        Mężczyzna
                    </button>
                    
                    <button 
                        className={gender === "women" ? styles.selectedButton : styles.button} 
                        onClick={() => handleGenderChange("women")}
                    >
                        Kobieta
                    </button>
                    
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoDaily}>
                        <div>
                            {maxDailyCalories}
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
}
