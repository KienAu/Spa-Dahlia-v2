<script setup>
    defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })
</script>


<template>
    <section class="about">
        <div class="container">
            <div class="flexbox about__row">
                <div class="flexbox__column--is-w9">
                    <span class="about__bg-title">{{ blok.background_title }}</span>
                    <h1 class="about__title">{{ blok.title }}</h1>
                    <small class="about__subtitle">{{ blok.subtitle }}</small>
                    <img class="about__image about__image--is-top" :src="blok.top_image.filename" :alt="blok.top_image.alt" />
                </div>
            </div>
            <div class="flexbox flexbox__j-content-end about__row">
                <div class="flexbox__column--is-w5 flexbox flexbox__align-center">
                    <p class="about__paragraph">{{ blok.text }}</p>
                </div>
                <div class="flexbox__column--is-w5">
                    <img class="about__image about__image--is-bottom" :src="blok.bottom_image.filename" :alt="blok.bottom_image.alt" />
                </div>
            </div>
        </div>
    </section>
</template>