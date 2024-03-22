import { useState } from 'react'
import { useGetData } from '../../hooks/useGetData'
import { MealDetails } from '../MealDetails/MealDetails.jsx'
import { Counter } from '../Counter/Counter.jsx'
import styles from './List.module.css'
import reactLogo from '../../assets/react.svg'

export function List() {
    const [url, setUrl] = useState(null);
    const [isShown, setIsShown] = useState(false);
    const [search, setSearch] = useState('');

    const { data: meals, error } = useGetData(url);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleButtonClick = (url) => {
        setUrl(url);
        setIsShown(true);
    };


    return (
        <>
            <div className={styles.listContainer}>
            
                <input 
                    type="text" 
                    placeholder='Search' 
                    className={styles.searchInput}
                    value={search}
                    onChange={handleSearchChange}
                />
                <button onClick={() => handleButtonClick("/burgerKing.json")}>Burger King</button>
                <button onClick={() => handleButtonClick("/mcDonalds.json")}>McDonald's</button>
                <button onClick={() => handleButtonClick("/subway.json")}>Subway</button>
            
            
            <MealDetails meals={meals} error={error} isShown={isShown} search={search}/>
            <Counter/>
            <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
            </a>
            </div>
        </>
    );
}