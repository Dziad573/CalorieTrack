import styles from './ProgressBar.module.css';

export const ProgressBar = ({ percent, thickness, calories, maxDailyCalories }) => {
    const maxThickness = 50;
    const minThickness = 0;
    const ProgressBarWidth = minThickness + ((maxThickness - minThickness) * percent) / 100;
    const roundedPercent = percent.toFixed(1);
    
    return (
        <div className={styles.progressBarContainer}>
            <div
                className={styles.progressBar}
                style={{
                    width: `${ProgressBarWidth*2}%`,
                    background: `${
                        ProgressBarWidth*2 >= 0 && ProgressBarWidth*2 <= 60 ? 'green' :
                        ProgressBarWidth*2 > 60 && ProgressBarWidth*2 <= 80 ? 'yellow' :
                        ProgressBarWidth*2 > 80 ? 'red' :
                        'black'
                        }`
                }}
            ></div>
            <div className={styles.label}>{roundedPercent}%</div>
            
            <div className={styles.label}>
                Aktualnie: {calories + ' '}<br/>
            </div>
            <div className={styles.label}>
                Max: {maxDailyCalories}
            </div>
            
        </div>
    );
};
