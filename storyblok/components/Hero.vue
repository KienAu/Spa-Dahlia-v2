<script setup>
    defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })
</script>

<template>
    <section class="hero" id="home">
        <div class="container hero__content flexbox flexbox__column flexbox__j-content-center">
            <img class="hero__image" :src="blok.media.filename" :alt="blok.media.alt">
            <span class="hero__text-scroll">{{ $t('scroll') }}</span>
        </div>
    </section>
</template>