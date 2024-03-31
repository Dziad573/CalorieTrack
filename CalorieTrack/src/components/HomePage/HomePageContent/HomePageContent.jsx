import { useEffect } from 'react';
import { runAnimations } from '../Pyramid/Animation.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HomePageContent.module.css';
import cof from '../../../assets/cof.jpg';

gsap.registerPlugin(ScrollTrigger);

export function HomePageContent() {
    useEffect(() => {
        runAnimations();
    }, []);

    const elements = [
        {
            content: (
                <>
                    <img src={cof} className={`imgHoverAnim ${styles.img}`} alt="cof" />
                    <p>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor eligendi ipsum, eum autem perferendis quam culpa nesciunt laborum distinctio architecto neque? Blanditiis exercitationem officiis perspiciatis illo, consequatur dolorem sequi.
                        </h2>
                    </p>
                </>
            ),
            className: `elementLeft ${styles.elementLeft}`
        },
        {
            content: (
                <>
                    <p>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor eligendi ipsum, eum autem perferendis quam culpa nesciunt laborum distinctio architecto neque? Blanditiis exercitationem officiis perspiciatis illo, consequatur dolorem sequi.
                        </h2>
                    </p>
                    <img src={cof} className={`imgHoverAnim ${styles.img}`} alt="cof" />
                </>
            ),
            className: `elementRight ${styles.elementRight}`
        },
        {
            content: (
                <>
                    <img src={cof} className={`imgHoverAnim ${styles.img}`} alt="cof" />
                    <p>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor eligendi ipsum, eum autem perferendis quam culpa nesciunt laborum distinctio architecto neque? Blanditiis exercitationem officiis perspiciatis illo, consequatur dolorem sequi.
                        </h2>
                    </p>
                </>
            ),
            className: `elementLeft ${styles.elementLeft}`
        },
        {
            content: (
                <>
                    <p>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor eligendi ipsum, eum autem perferendis quam culpa nesciunt laborum distinctio architecto neque? Blanditiis exercitationem officiis perspiciatis illo, consequatur dolorem sequi.
                        </h2>
                    </p>
                    <img src={cof} className={`imgHoverAnim ${styles.img}`} alt="cof" />
                </>
            ),
            className: `elementRight ${styles.elementRight}`
        },
    ];

    return (
        <>
            {elements.map((element, index) => (
                <div key={index} className={element.className}>
                    {element.content}
                </div>
            ))}
        </>
    );
}
