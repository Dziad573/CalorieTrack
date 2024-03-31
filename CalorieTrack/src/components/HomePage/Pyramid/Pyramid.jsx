import { useEffect } from 'react'
import { runAnimations } from './Animation.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../Pyramid/Pyramid.module.css'
import olive from './pyramidImages/olive-oil.png'
import meat from './pyramidImages/meat.png'
import milk from './pyramidImages/milk.png'
import fish from './pyramidImages/fish.png'
import apple from './pyramidImages/apple.png'
import lettuce from './pyramidImages/lettuce.png'
import bread from './pyramidImages/bread.png'
import water from './pyramidImages/water-bottle.png'
import clock from './pyramidImages/clock.png'
import ball from './pyramidImages/basket-ball.png'
import run from './pyramidImages/run.png'
import box from './pyramidImages/boxing.png'
import tennis from './pyramidImages/tennis.png'
import racing from './pyramidImages/racing.png'
import dumbbell from './pyramidImages/dumbbell.png'
import baguette from './pyramidImages/baguette.png'
import barley from './pyramidImages/barley.png'
import breadd from './pyramidImages/breadd.png'
import pea from './pyramidImages/pea.png'
import strawberry from './pyramidImages/strawberry.png'
import watermelon from './pyramidImages/watermelon.png'
import broccoli from './pyramidImages/broccoli.png'
import carrots from './pyramidImages/carrots.png'
import grapes from './pyramidImages/grapes.png'
import egg from './pyramidImages/egg.png'
import oyster from './pyramidImages/oyster.png'
import shrimp from './pyramidImages/shrimp.png'
import yoghurt from './pyramidImages/yoghurt.png'
import cheese from './pyramidImages/cheese.png'
import sausages from './pyramidImages/sausages.png'
import meatt from './pyramidImages/meatt.png'
import bacon from './pyramidImages/bacon.png'
import cake from './pyramidImages/cake.png'
import cupcake from './pyramidImages/cupcake.png'
import donut from './pyramidImages/donut.png'


gsap.registerPlugin(ScrollTrigger);

const description = {
    fat: "Tłuszcze są ważnym źródłem energii dla organizmu. Zalecana ilość: Około 20-35% dziennego spożycia kalorii powinno pochodzić z tłuszczów, z czego większość powinna być nienasycona (np. tłuszcze roślinne). Ważne jest ograniczenie spożycia słodyczy oraz tłuszczów nasyconych i trans, które mogą zwiększać ryzyko chorób serca.",
    meat: "Mięso jest źródłem białka, żelaza, cynku i witaminy B12. Zalecana ilość: Zależnie od wieku i aktywności fizycznej, zaleca się spożywanie 2-3 porcji mięsa lub substytutów mięsa dziennie. Ważne jest wybieranie chudych źródeł białka, takich jak drób, ryby, fasola i orzechy.",
    dairy: "Nabiał dostarcza wapnia, białka i witamin z grupy B. Ryby są bogate w kwasy tłuszczowe omega-3, które są korzystne dla zdrowia serca. Zalecana ilość: Zwykle zaleca się spożywanie 2-3 porcji nabiału dziennie i 2-3 porcji ryb tygodniowo.",
    fruits: "Owoce i warzywa są bogate w błonnik, witaminy, minerały i przeciwutleniacze. Zalecana ilość: Zaleca się spożywanie co najmniej 5 porcji owoców i warzyw dziennie.",
    bread: "Produkty zbożowe są głównym źródłem węglowodanów, które dostarczają energię. Zalecana ilość: W zależności od wieku i aktywności fizycznej, zaleca się spożywanie 6-11 porcji produktów zbożowych dziennie.",
    lifeStyle: "Aktywność fizyczna: Zalecane jest co najmniej 150 minut umiarkowanej aktywności lub 75 minut intensywnej aktywności tygodniowo. Sen: Ważne jest zapewnienie odpowiedniej ilości snu, zwykle 7-9 godzin dla dorosłych. Spożycie wody: Zalecane jest spożywanie około 8 szklanek wody dziennie, ale ilość może się różnić w zależności od indywidualnych potrzeb i warunków klimatycznych."
};


export function Pyramid(){
    function PyramidElement({ icons, type, description }){
        return (
            <section className={styles.pyramidElement}>
                <div className={`foodIcon ${styles.typeOfFood}`}>

                {icons.map((icon, index) => (
                    <img key={index} src={icon} className={styles.icon} alt="" />
                ))}
                </div>

                <div className={styles.info}>
                    
                    <p>
                        <h2>
                            {type}
                        </h2>
                    </p>
                    <p className={styles.description}>  
                        {description}
                    </p>
                </div>
            </section>
        )
    }

    useEffect(() => {
        runAnimations();
    }, []);

    return(
        <>
            <div className={styles.pyramidContainer}>
                <PyramidElement 
                icons={[olive, cake, donut, cupcake]} 
                type="Tłuszcze i słodycze" 
                description={description.fat} />
                <PyramidElement 
                icons={[meat, bacon, sausages, meatt]} 
                type="Mięso" 
                description={description.meat} />
                <PyramidElement 
                icons={[milk, fish, egg, oyster, shrimp, yoghurt, cheese]} 
                type="Nabiał i ryby" 
                description={description.dairy} />
                <PyramidElement 
                icons={[apple, lettuce, pea, strawberry, broccoli, watermelon, carrots, grapes]} 
                type="Owoce i warzarzywa" 
                description={description.fruits} />
                <PyramidElement 
                icons={[bread, baguette, barley, breadd]} 
                type="Pieczywo"
                description={description.bread} />
                <PyramidElement 
                icons={[water, clock, ball, run, box, tennis, racing, dumbbell]} 
                type="Tryb życia" 
                description={description.lifeStyle} />
            </div>

        </>
    )
    
}