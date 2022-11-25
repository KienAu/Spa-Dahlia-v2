export default () => {
    const nuxtApp = useNuxtApp();

    return {
        gsap: nuxtApp.$gsap,
        Draggable: nuxtApp.$Draggable,
        ScrollTrigger: nuxtApp.$ScrollTrigger,
        ScrollToPlugin: nuxtApp.$ScrollToPlugin
    };
};