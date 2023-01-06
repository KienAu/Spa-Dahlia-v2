<script setup>
    const navigationData = defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })
    
    const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap()
    const navigation = navigationData.blok.navigation
    const navigationItem = ref(null)
    const route = useRoute()
    let language = route.params.slug.slice()

    onMounted(() => {
      const sections = gsap.utils.toArray('section')
      const body = document.querySelector('body')
      const menuBtn = document.getElementById('menu')
      let isOpen = false
      let mm = gsap.matchMedia();

      gsap.to('header', {opacity: 1, delay: .25, duration: 1})

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
          navigationItem.value[i].classList.add('header__navigation__item--is-active')
          menuBtn.classList.remove('header__menu-btn--is-open')
          body.classList.remove('body--is-hidden')
        })
      }

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
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

      menuBtn.addEventListener('click', () => {
        isOpen = !isOpen 
        if (isOpen === true) {
          menuBtn.classList.add('header__menu-btn--is-open')
          body.classList.add('body--is-hidden')
          gsap.to('.header__navigation', {
            height: 'calc(100vh - 60px)',
          })
          gsap.to('.header__navigation__text', {
            opacity: 1,
            delay: .5,
          })
        } else if (!isOpen) {
          menuBtn.classList.remove('header__menu-btn--is-open')
          body.classList.remove('body--is-hidden')
          gsap.to('.header__navigation', {
            height: '0',
            delay: .5,
          })

          gsap.to('.header__navigation__text', {
            opacity: 0,
            duration: .25,
          })
        }
      })

      mm.add('(max-width: 1024px)', () => {
          navigationItem.value[i].addEventListener('click', () => {
            gsap.to('.header__navigation', {
            height: '0',
            delay: .5,
          })
        })
      })
    })

</script>
 
<template>
  <header class="header">
    <div class="header__container">
      <div class="header__menu-btn" id="menu">
        <div class="header__menu-icon">
          <span class="header__menu-icon__line"></span>
          <span class="header__menu-icon__line"></span>
        </div>
      </div>

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
          <span class="header__lang__text" :class="{'header__lang__text--is-active': language[0] != 'fr'}">
            EN
          </span>
        </NuxtLink>
        |
        <NuxtLink class="header__lang__link" to="/fr/accueil">
          <span class="header__lang__text" :class="{'header__lang__text--is-active': language[0] === 'fr'}">
            FR
          </span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>