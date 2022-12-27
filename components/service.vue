<script setup>
    const serviceData = defineProps([
        'name',
        'price',
        'tax',
        'extra_info'
    ])

    const route = useRoute()

    let lang = route.params.slug.slice()

</script>

<template>
    <li class="service" :class="{'service--has-info': extra_info}">
        <div class="service__price">
            <span v-if="lang[0] === 'fr'">
                {{ price + '$' }}
            </span>
            <span v-else>
                {{ '$' + price }}
            </span>
            <small class="service__tax" v-if="tax">
                {{ $t('+tax') }}
            </small>
        </div>
        <div class="service__name" >
            {{ name }}
            <small class="service__extra-info" v-if="extra_info"> {{ extra_info }} </small>
        </div>
    </li>
</template>