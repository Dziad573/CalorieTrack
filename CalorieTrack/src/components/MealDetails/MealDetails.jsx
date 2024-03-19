import styles from './MealDetails.module.css';

export function MealDetails({ meals, error, isShown }) {
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
                        {meals.map((item, index) => (
                            <tr key={index}>
                                <td>{
                                    <div> {item.foodName} 
                                    <button className={styles.addButton}>+</button> 
                                    </div>
                                    }</td>
                                <td>{item.calories}</td>
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