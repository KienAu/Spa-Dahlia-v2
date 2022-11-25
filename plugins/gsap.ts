import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            gsap,
            Draggable,
            ScrollTrigger,
            ScrollToPlugin
        },
    };
});