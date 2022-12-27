<script setup>
    const { gsap } = useGsap();

    const featureData = defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })

    let currentActiveSlide = ref(0)

    const slides = featureData.blok.feature

    const handleSlideChange = (val) => {
        let direction
        const calculateNextSlide = currentActiveSlide.value + val

        if (val > 0) {
            direction = "next";
        } else {
            direction = "previous"
        }

        if (direction === "next" && calculateNextSlide < slides.length) {
            currentActiveSlide.value += val
        } else if (direction === "next") {
            currentActiveSlide.value = 0
        } else if (direction === "previous" && calculateNextSlide < 0) {
            currentActiveSlide.value = slides.length - 1
        } else {
            currentActiveSlide.value += val
        }
    }

    const formattedNumber = (n) => {
        return ('0' + n).slice(-2)
    }

    onMounted(() => {
        let mm = gsap.matchMedia();
        mm.add('(min-width: 1025px)', () => {
            gsap.from('.features__image-wrapper', {
                xPercent: -50,
                opacity: 0,
                duration: 1.5,
                ease: 'expo',
                scrollTrigger: {
                    trigger: '.features',
                }
            })

            gsap.from('.features__modal', {
                xPercent: -50,
                duration: 1,
                delay: .75,
                opacity: 0,
                ease: 'expo',
                scrollTrigger: {
                    trigger: '.features',
                }
            })

            gsap.set('.features__image-wrapper', {
                zIndex: 1,
            })

            gsap.from('.features__control', {
                opacity: 0,
                duration: .5,
                delay: 1.5,
                ease: 'expo',
                scrollTrigger: {
                    trigger: '.features',
                }
            })

            gsap.from('.features__indicator', {
                opacity: 0,
                duration: .5,
                delay: 1.75,
                ease: 'expo',
                scrollTrigger: {
                    trigger: '.features',
                }
            })
        })
    })

</script>

<template>
    <section class="features" id="features">
        <div class="container">
            <div class="flexbox flexbox__align-start">
                <div class="flexbox__column--is-w4 flexbox__column--is-md-none">
                    <div class="features__image-wrapper">
                        <img class="features__image" v-for="(feature, index) of blok.feature" :key="feature._uid" :class="{'features__image--is-show' : index === currentActiveSlide}" :src="feature.image.filename" :alt="feature.image.alt" />
                    </div>
                </div>
                <div class="flexbox__column--is-w8 flexbox__column--is-md-w12 features__outer-modal">
                    <div class="features__modal flexbox flexbox__column">
                        <div class="features__content" v-for="(feature, index) of blok.feature" :key="index" :class="{'features__content--is-show' : index === currentActiveSlide}">
                            <span class="features__bg-title">{{ blok.bg_text }}</span>
                            <h1 class="features__title">{{ feature.title }}</h1>
                            <img class="features__content__image" :src="feature.image.filename" :alt="feature.image.alt" />
                            <p class="features__paragraph">{{ feature.description }}</p>
                        </div>
                        <div class="features__control-wrapper flexbox flexbox__column flexbox__j-content-space-between">
                            <span class="features__control" @click="handleSlideChange(1)">{{ blok.next }}</span>
                            <span class="features__control" @click="handleSlideChange(-1)">{{ blok.previous }}</span>
                        </div>
                    </div>
                    <span class="features__indicator">
                        {{ formattedNumber(currentActiveSlide + 1) }} <span class="features__seperator"> </span> {{ formattedNumber(slides.length) }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>