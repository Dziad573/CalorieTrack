import content from '../../../constants/content.js';

export const ContentComponent = ({ id }) => {
    const section = content.find(sec => sec.id === id);

    if (!section) {
        return <p>Nie znaleziono sekcji.</p>;
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                <h2>{section.title}</h2>
                {Array.isArray(section.text) ? (
                    <ul style={{listStyle: 'none'}}>
                        {section.text.map((line, idx) => (
                            <li style={{textAlign: 'left'}} key={idx}>{line}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{section.text}</p>
                )}
            </div>
        </>
        
    );
};
