<script setup>
    defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })
</script>
 
<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink class="header__logo" to="/">
        <img class="header__logo__image" :src="blok.logo.filename" />
      </NuxtLink>
      <nav class="header__navigation">
        <ul class="header__navigation__list">
          <li class="header__navigation__item" v-for="item in blok.navigation" :key="blok._uid">
            <span class="header__navigation__text">{{ item.text }}</span>
          </li>
        </ul>
      </nav>
      <div class="header__lang">
        <NuxtLink class="header__lang__link" to="/">
          <span class="header__lang__text">
            EN
          </span>
        </NuxtLink>
        |
        <NuxtLink class="header__lang__link" to="/">
          <span class="header__lang__text">
            FR
          </span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>