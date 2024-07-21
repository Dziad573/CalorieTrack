import styles from "./TopBar.module.css"
import reactLogo from '../../assets/react.svg'
import { Link } from "react-router-dom";

export function TopBar({ dispatch }){
    
    const handleButtonOpenHomePageClick = () => {
        dispatch({ type: 'open_home_page' });
    };
    const handleButtonOpenFormClick = () => {
        dispatch({ type: 'open_form' });
    };
    const handleButtonOpenListClick = () => {
        dispatch({ type: 'open_list' });
    };

    return (
        <>
            <div className={styles.topBarContainer}>
                <div className={styles.topBar}>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
                    </a>
                    <Link to="/">
                        <button onClick={handleButtonOpenHomePageClick} className="topBar"> 
                            Główna
                        </button>
                    </Link>
                    
                    {/* <Link to="/kalkulator">
                        <button onClick={handleButtonOpenFormClick}>
                            Dodaj
                        </button>
                    </Link> */}
                    <Link to="/lista">
                        <button onClick={handleButtonOpenListClick}>
                            Fastfood
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )


}