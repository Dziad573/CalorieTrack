import React from 'react';
import styles from './MealDetails.module.css';

export function MealDetails({ meals, error, isShown, search, restaurant, onMealSelect }) {
    const filteredMeals = meals.filter(item =>
        item.foodName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {isShown ? (
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Nazwa</th>
                                <th>Kalorie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMeals.map((filteredItem, index) => (
                                <tr key={index}>
                                    <td className={styles.foodName}>
                                        <span>
                                            <button 
                                                className={styles.addButton} 
                                                onClick={() => onMealSelect(filteredItem.calories)}
                                            >
                                                +
                                            </button> 
                                            {filteredItem.foodName}
                                        </span>
                                    </td>
                                    <td className={styles.calories}>
                                        {filteredItem.calories + " kcal"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            ) : (
                ""
            )}
        </>
    );
}
