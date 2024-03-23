import React from 'react';
import styles from './MealDetails.module.css';

export function MealDetails({ meals, error, isShown, search, restaurant }) {

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
                                    <td>
                                        <span>
                                            {filteredItem.foodName}
                                            <button 
                                                className={styles.addButton} 
                                                //onClick={() => handleAddCalories(filteredItem.calories)}
                                            >
                                                +
                                            </button> 
                                        </span>
                                        
                                    </td>
                                    <td>{filteredItem.calories}</td>
                                    <td>
                                        
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
