<script setup>
    const gsap = useGsap();

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
        return ('0' + n).slice(-2);
    }

</script>

<template>
    <section class="features" id="features">
        <div class="container">
            <div class="flexbox flexbox__align-start">
                <div class="flexbox__column--is-w4">
                    <div class="features__image-wrapper">
                        <img class="features__image" v-for="(feature, index) of blok.feature" :key="feature._uid" :class="{'features__image--is-show' : index === currentActiveSlide}" :src="feature.image.filename" :alt="feature.image.alt" />
                    </div>
                </div>
                <div class="flexbox__column--is-w8 features__outer-modal">
                    <div class="features__modal flexbox flexbox__column">
                        <div class="features__content" v-for="(feature, index) of blok.feature" :key="index" :class="{'features__content--is-show' : index === currentActiveSlide}">
                            <span class="features__bg-title">{{ $t('features') }}</span>
                            <h1 class="features__title">{{ feature.title }}</h1>
                            <p class="features__paragraph">{{ feature.description }}</p>
                        </div>
                        <div class="features__control-wrapper flexbox flexbox__column flexbox__j-content-space-between">
                            <span class="features__control" @click="handleSlideChange(1)">{{ $t('next') }}</span>
                            <span class="features__control" @click="handleSlideChange(-1)">{{ $t('prev') }}</span>
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