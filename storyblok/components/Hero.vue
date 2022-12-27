<script setup>
    defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })

    const { gsap } = useGsap();

    onMounted(() => {
        gsap.from('.hero', {
                opacity: 0,
                delay: 1,
                duration: 1.5,
                ease: 'expo',
            })
    })

</script>

<template>
    <section class="hero" id="home">
        <div class="container hero__container flexbox flexbox__column flexbox__j-content-center">
            <div class="hero__wrapper">
                <picture>
                    <source media="(max-width:768px)" :srcset="blok.mobile_media.filename">
                    <source :srcset="blok.media.filename">
                    <img class="hero__image" :src="blok.media.filename" :alt="blok.media.alt">
                </picture>
            </div>
            <span class="hero__text-scroll">{{ blok.scroll_text }}</span>
        </div>
    </section>
</template>