import styles from "./TopBar.module.css"
import reactLogo from '../../assets/react.svg'

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
            <div className={styles.topBar}>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
                </a>
                <button onClick={handleButtonOpenHomePageClick}>
                    Główna
                </button>
                <button onClick={handleButtonOpenFormClick}>
                    Dodaj
                </button>
                <button onClick={handleButtonOpenListClick}>
                    Lista
                </button>
            </div>
        </>
    )


}