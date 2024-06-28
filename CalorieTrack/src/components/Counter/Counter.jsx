import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar.jsx';
import styles from './Counter.module.css';

export function Counter({ caloriesAdd, style }) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [inputValues, setInputValues] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        if (!isNaN(caloriesAdd) && caloriesAdd !== null) {
            setCalories(prevCalories => prevCalories + parseFloat(caloriesAdd));
            setInputValues(prevInputValues => [...prevInputValues, caloriesAdd.toString()]);
        }
    }, [caloriesAdd]);

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

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handleAddCalories = () => {
        if (isNaN(parseFloat(inputValue))) return;
        setCalories(prevCalories => prevCalories + parseFloat(inputValue));
        setInputValues(prevInputValues => [...prevInputValues, inputValue]);
        setInputValue("");
    };

    const handleRemoveCalories = (index) => {
        const valueToRemove = parseFloat(inputValues[index]);
        if (!isNaN(valueToRemove)) {
            setCalories(prevCalories => prevCalories - valueToRemove);
            setInputValues(prevInputValues => prevInputValues.filter((_, i) => i !== index));
        }
    };

    const maxDailyCalories = calculateMaxCalories();
    const percent = ((calories / maxDailyCalories) * 100);

    const maxThickness = 50;
    const minThickness = 0;
    const thickness = maxThickness - (maxThickness - minThickness) * (percent / 100);

    return (
        <div>
            <section className={styles.counter} style={style}>
                <div className={styles.inputs}>
                    <input type="text" placeholder="Waga" value={weight} onChange={handleWeightChange} />
                    <input type="text" placeholder="Wzrost" value={height} onChange={handleHeightChange} />
                    <input type="text" placeholder="Wiek" value={age} onChange={handleAgeChange} />
                    <input
                        type="text"
                        placeholder="Kalorie"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddCalories} className={styles.addButton}>+</button>
                </div>

                <div className={styles.progressContainer}>
                    <div className={styles.progress}>
                        <ProgressBar
                            percent={percent}
                            thickness={thickness}
                            maxDailyCalories={maxDailyCalories}
                            calories={calories}
                        />
                    </div>
                    <div className={styles.inputsValues}>
                        {inputValues.map((item, index) => (
                            <div key={index}>
                                <span>
                                    {item}
                                    <button 
                                        className={styles.addButton} 
                                        onClick={() => handleRemoveCalories(index)}
                                    >
                                        -
                                    </button> 
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
