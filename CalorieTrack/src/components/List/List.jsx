import { useState } from 'react';
import { useGetData } from '../../hooks/useGetData';
import { MealDetails } from '../MealDetails/MealDetails.jsx';

export function List() {
    const [url, setUrl] = useState(null);
    const [isShown, setIsShown] = useState(false);
    const { data: meals, error } = useGetData(url);

    const handleBurgeKingButtonClick = () => {
        setUrl("/burgerKing.json");
        setIsShown(true);
    };
    const handleMcDonaldButtonClick = () => {
        setUrl("/mcDonalds.json");
        setIsShown(true);
    };
    const handleSubwayButtonClick = () => {
        setUrl("/subway.json");
        setIsShown(true);
    };

    return (
        <>
            <div>
                <button onClick={handleBurgeKingButtonClick}>Burger King</button>
                <button onClick={handleMcDonaldButtonClick}>McDonald's</button>
                <button onClick={handleSubwayButtonClick}>Subway</button>
            </div>
            
            <MealDetails meals={meals} error={error} isShown={isShown}/>
        </>
    );
}