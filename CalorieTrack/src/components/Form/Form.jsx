import { Counter } from '../Counter/Counter.jsx'
export function Form(){
    
    const counterStyle = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: '500px',
        height: '700px'

    };
    return(
        <>
            <Counter style={counterStyle}/>
        </>
    )
}