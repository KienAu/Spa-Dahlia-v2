<script setup>
    defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })

    const { gsap } = useGsap();

    onMounted(() => {

        let mm = gsap.matchMedia();
        mm.add('(min-width: 1025px)', () => {

            gsap.from('.about__image--is-top', {
                xPercent: 50,
                opacity: 0,
                duration: 1.5,
                ease: 'expo',
                scrollTrigger: {
                    trigger: '.about',
                }
            })

            gsap.from('.about__bg-title', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 1.5,
                scrollTrigger: {
                    trigger: '.about',
                }
            })

            gsap.from('.about__title', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 1.75,
                scrollTrigger: {
                    trigger: '.about',
                }
            })

            gsap.from('.about__subtitle', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                    trigger: '.about',
                }
            })

            gsap.from('.about__image--is-bottom', {
                xPercent: -50,
                opacity: 0,
                duration: 1,
                delay: .75,
                ease: 'expo',
                scrollTrigger: {
                    trigger: '.about',
                }
            })

            gsap.from('.about__paragraph', {
                xPercent: 50,
                opacity: 0,
                duration: 1.5,
                delay: 2.25,
                scrollTrigger: {
                    trigger: '.about',
                }
            })
        })
    })
</script>


<template>
    <section class="about" id="about">
        <div class="container">
            <div class="flexbox about__row">
                <div class="flexbox__column--is-w9 flexbox__column--is-sm-w12">
                    <div class="about__content">
                        <span class="about__bg-title">{{ blok.background_title }}</span>
                        <h1 class="about__title">{{ blok.title }}</h1>
                        <small class="about__subtitle">{{ blok.subtitle }}</small>
                        <img class="about__image about__image--is-top" :src="blok.top_image.filename" :alt="blok.top_image.alt" />
                    </div>
                </div>
            </div>
            <div class="flexbox flexbox__j-content-end about__row">
                <div class="flexbox__column--is-w5 flexbox__column--is-md-w7 flexbox__column--is-sm-w12 flexbox flexbox__align-center">
                    <p class="about__paragraph">{{ blok.text }}</p>
                </div>
                <div class="flexbox__column--is-w5 flexbox__column--is-sm-w12">
                    <img class="about__image about__image--is-bottom" :src="blok.bottom_image.filename" :alt="blok.bottom_image.alt" />
                </div>
            </div>
        </div>
    </section>
</template>