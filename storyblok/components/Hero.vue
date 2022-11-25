<script setup>
    defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })
</script>

<template>
    <section class="hero">
        <div class="container hero__content">
            <img class="hero__image" :src="blok.media.filename" :alt="blok.media.alt">
            <span class="hero__text-scroll">{{ $t('scroll') }}</span>
        </div>
    </section>
</template>