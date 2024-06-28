import React, { useState, useEffect } from 'react';
import { useGetData } from '../../hooks/useGetData';
import { MealDetails } from '../MealDetails/MealDetails.jsx';
import { Counter } from '../Counter/Counter.jsx';
import styles from './List.module.css';
import { useParams } from 'react-router-dom';

export function List() {
    const [url, setUrl] = useState('/burgerking.json');
    const [isShown, setIsShown] = useState(true);
    const [search, setSearch] = useState('');
    const [isInputShown, setIsInputShown] = useState(true);
    const [isMoreShown, setIsMoreShown] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const counterStyle = {
        position: 'relative',
        padding: '0',
        margin: '2rem 0',
        width: '100%',
        height: '100%',
        maxWidth: '480px',
        maxHeight: '700px'
    };
    const [selectedCalories, setSelectedCalories] = useState(null);

    const handleMealSelect = (calories) => {
        setSelectedCalories(calories);
    };

    const { data: meals, error } = useGetData(url);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleButtonClick = (restaurantName) => {
        const newUrl = `/${restaurantName.toLowerCase()}.json`;
        setUrl(newUrl);
        setIsShown(true);
        setIsInputShown(true);
    };

    const handleButtonMoreClick = () => {
        setIsMoreShown(!isMoreShown);
    };

    const restaurant = useParams().restaurant;

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={styles.listContainer}>
                <div className={styles.buttonsContainer}>
                    <div className={styles.test}>
                        <button onClick={() => handleButtonClick("burgerking")} className={styles.button}>Burger King</button>
                        <button onClick={() => handleButtonClick("mcdonalds")} className={styles.button}>McDonald's</button>
                        <button onClick={() => handleButtonClick("subway")} className={styles.button}>Subway</button>
                        {isMoreShown ? 
                            <button onClick={() => handleButtonMoreClick()}>X</button>
                            : 
                            <button onClick={() => handleButtonMoreClick()}>...</button>
                        }
                    </div>

                    <div className={styles.test}>
                        {isMoreShown ? (
                                <div className={styles.more}>
                                    <button onClick={() => handleButtonClick("kfc")} className={styles.button}>KFC</button>
                                    <button onClick={() => handleButtonClick("starbucks")} className={styles.button}>Starbucks</button>
                                    <button onClick={() => handleButtonClick("dominos")} className={styles.button}>Domino's</button>
                                </div>
                        ) : null}
                    </div>
                </div>
                {screenWidth <= 1360 ? <Counter style={counterStyle} caloriesAdd={selectedCalories} /> : null}
                {isInputShown ? (
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.searchInput}
                        value={search}
                        onChange={handleSearchChange}
                    />
                ) : null}
                <MealDetails
                    meals={meals}
                    error={error}
                    isShown={isShown}
                    search={search}
                    restaurant={restaurant}
                    onMealSelect={handleMealSelect}
                />
                {selectedCalories !== null && (
                    <div>
                        <h2>Selected Calories: {selectedCalories}</h2>
                    </div>
                )}
                {screenWidth > 1360 ? <Counter caloriesAdd={selectedCalories} /> : null}
            </div>
        </>
    );
}
