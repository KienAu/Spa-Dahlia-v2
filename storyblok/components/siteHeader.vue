<script setup>
    const navigationData = defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })

    
    const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap();

    const navigation = navigationData.blok.navigation
    const navigationItem = ref(null)



    onMounted(() => {
      const sections = gsap.utils.toArray('section')
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

      for (let i in navigationItem.value) {

        navigationItem.value[i].addEventListener('mouseover', () => {
            navigationItem.value[i].classList.add('header__navigation__item--is-active')
        })

        navigationItem.value[i].addEventListener('mouseleave', () => {
            navigationItem.value[i].classList.remove('header__navigation__item--is-active')
        })

        navigationItem.value[i].addEventListener('click', () => {
          const id = navigation[i].id
          const scrollTo = '#' + id
          gsap.to(window, {scrollTo: {y: scrollTo, offsetY: 100}})
        })
      }

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          markers: true,
          onEnterBack: () => {
              navigationItem.value[index].classList.add('header__navigation__item--is-active')
          },
          onEnter: () => {
              navigationItem.value[index].classList.add('header__navigation__item--is-active')
          },
          onLeave: () => {
              navigationItem.value[index].classList.remove('header__navigation__item--is-active')
          },
          onLeaveBack: () => {
              navigationItem.value[index].classList.remove('header__navigation__item--is-active')
          }
        })
      })
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
          <li ref="navigationItem" class="header__navigation__item" v-for="item in blok.navigation" :key="blok._uid">
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