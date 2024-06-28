import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {

    const animateElements = (selector, offsetX) => {
        const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                gsap.fromTo(element.children, {x: offsetX, opacity: 0},
                {x: "0", opacity: 1, stagger: .2, duration: 1, visibility:"visible", ease: "easeInOut", 
                scrollTrigger: {
                    trigger: element,
                    start: "top 60%",
                    //markers: false,
                    scrub: false
                }});
            });
        };

        animateElements('.elementLeft', '-=100');
        animateElements('.elementRight', '+=100');
    
    const animateElementsIcons = (selector, offsetY) => {
        const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                gsap.fromTo(element.children, {y: offsetY, opacity: 0},
                {y: "0", opacity: 1, stagger: .15, duration: .8, visibility:"visible", ease: "easeInOut", 
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    //markers: true,
                    scrub: false
                }});
            });
        };

        animateElementsIcons('.foodIcon', '-=80');
        
    const images = document.querySelectorAll('.imgHoverAnim');
    gsap.set(images, {maxWidth: "40%",minWidth: "20%"});
    images.forEach((element) => {
        element.onmouseover = function() {
            gsap.to(element, { duration: 1, y: "-=50", boxShadow: "0px 0px 53px 3px rgb(243, 238, 223)", ease: "easeInOut" });
        };
    
        element.onmouseout = function() {
            gsap.to(element, { duration: 1, y: "0", boxShadow: "0px 0px 0px 0px rgb(243, 238, 223)", ease: "easeInOut"});
        };
    
    });
}