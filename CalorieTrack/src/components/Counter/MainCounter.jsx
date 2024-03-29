import { useState } from 'react'
import styles from './MainCounter.module.css'
import weightIcon from '../../assets/weight.png'
import heightIcon from '../../assets/ruler.png'
import dateIcon from '../../assets/calendar.png'
import foodIcon from '../../assets/diet.png'
import trainingIcon from '../../assets/runner.png'


export function MainCounter({ style }) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [goal, setGoal] = useState("=");
    

    const calculateMaxCalories = (includeTraining) => {
        const ppmmen = 10 * weight + 6.25 * height + 5 * age + 5;
        const ppmwomen = 10 * weight + 6.25 * height + 5 * age - 161;
        let maxCalories = 0;
        let text = "Twoje dzienne zapotrzebowanie to: ";

        if (gender === "men") {
            maxCalories = ppmmen;
        } else if (gender === "women") {
            maxCalories = ppmwomen;
        }

        if (includeTraining) {
            maxCalories *= 1.2;
            text = "Twoje dzienne zapotrzebowanie wraz z treningiem to: ";
        }
        if (goal === "=") {
            return text + Math.round(maxCalories) + " kcal";
        } else if (goal === "-") {
            return text + Math.round(maxCalories * 0.8) + " kcal";
        } else if (goal === "+") {
            return text + Math.round(maxCalories * 1.2) + " kcal";
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

    const handleGoalChange = (selectedGoal) => {
        setGoal(selectedGoal);
    }
    

    return (
        <div>
            <section className={styles.counter} style={style} >
                <div className={styles.inputs}>
                    <div>
                        <img src={weightIcon} className={styles.icon} alt="Weight Icon" />
                        <input type="text" placeholder="Waga" value={weight} onChange={handleWeightChange} />
                    </div>
                    <div>
                        <img src={heightIcon} className={styles.icon} alt="Height Icon" />
                        <input type="text" placeholder="Wzrost" value={height} onChange={handleHeightChange} />
                    </div>
                    <div>
                        <img src={dateIcon} className={styles.icon} alt="Date Age Icon" />
                        <input type="text" placeholder="Wiek" value={age} onChange={handleAgeChange} />
                    </div>

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

                <div className={styles.inputs}>
                    <select value={goal} onChange={(e) => handleGoalChange(e.target.value)}>
                        <option value="=" defaultValue>1. Chcę utrzymać wagę</option>
                        <option value="-">2. Chcę schudnąć</option>
                        <option value="+">3. Chcę przytyć</option>
                    </select>
                    {/* <button onClick={() => handleCaltulate()}>
                        Oblicz
                    </button> */}
                </div>
                
                <div className={styles.infoContainer}>
                    <div className={styles.infoDaily}>
                        <div>
                            {weight > 0 && height > 0 && age <=150 && gender ? (
                                <>
                                    <div>
                                        <img src={foodIcon} className={styles.icon} alt="Food Icon" />
                                        {calculateMaxCalories(false)}
                                    </div>
                                    <div>
                                        <img src={trainingIcon} className={styles.icon} alt="Training Icon" />
                                        {calculateMaxCalories(true)}
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <p>Wprowadź wszystkie dane</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
}
