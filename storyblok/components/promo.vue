<script setup>
    const prop = defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })
</script>

<template>
    <div class="promo">
        <div class="container">
            <h2>{{ blok.Title }}</h2>
            <div class="promo__text">
                {{ blok.Text }}
            </div>
        </div>
    </div>
</template>