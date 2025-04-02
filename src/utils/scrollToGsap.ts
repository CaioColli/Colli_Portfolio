import gsap from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const handleScrollTo = (id: string) => {
    gsap.to(window, {
        scrollTo: {
            y: `#${id}`,
            offsetY: 50
        },
        duration: 0.5
    })
}