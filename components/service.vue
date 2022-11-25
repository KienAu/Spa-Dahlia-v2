<script setup>
    defineProps([
        'name',
        'price',
        'tax',
        'extra_info'
    ])

</script>

<template>
    <li class="service" :class="{'service--has-info': extra_info}">
        <div class="service__price">
            {{ $t('$',{ price: price }) }}
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