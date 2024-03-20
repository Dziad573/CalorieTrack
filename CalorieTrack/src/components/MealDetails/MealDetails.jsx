import styles from './MealDetails.module.css';

export function MealDetails({ meals, error, isShown, search }) {

    const filteredMeals = meals.filter(item =>
        item.foodName.toLowerCase().includes(search.toLowerCase())
    );
    // if (error) {
    //    return <span className={styles.error}>{error.message}</span>;
    // }

    // if (!meals || !meals.length) {
    //     return <span className={styles.loading}>Ładowanie...</span>;
    // }
    return (<>
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
                                <td>{
                                    <div> {filteredItem.foodName} 
                                    <button className={styles.addButton}>+</button> 
                                    </div>
                                    }
                                </td>
                                <td className={styles.caloriesTableData}>
                                    {filteredItem.calories}
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
    )
}