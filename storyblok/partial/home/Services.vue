<script setup>
    const servicesData = defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })

    const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap()

    const services = servicesData.blok.list
    const servicesListDesktop = ref(null)
    const servicesListMobile = ref(null)

    let isMobile ;

    let displayValue = ref(services[0].name)

    const selectedValue = (e) => {
        displayValue.value = e
    }

    onMounted(() => {
        const panels = gsap.utils.toArray('.services__content-container')
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

        const servicesDropmenu = () =>{
            const displayService = document.querySelector('.services__mobile .services__display-selected')
            const dropdownServices = document.querySelector('.services__mobile .services__list')
            const servicesContent = document.querySelectorAll('.services__mobile .services__content-container')
            let currentService = servicesContent[0].id

            if (currentService === servicesContent[0].id) {
                servicesContent[0].classList.add('services__content-container--is-active')                           
            }

            for (let i in servicesListMobile.value) {
                servicesListMobile.value[i].classList.remove('services__item--is-active')
                servicesListMobile.value[0].classList.add('services__item--is-active')
                const servicesListId = servicesListMobile.value[i].dataset.id
                
                servicesListMobile.value[i].addEventListener('click', (e) => {

                    currentService = servicesContent[i].id

                    for (const item of servicesContent) {
                        item.classList.remove('services__content-container--is-active')
                    }

                    for (const service of servicesListMobile.value) {
                        service.classList.remove('services__item--is-active')
                    }
                    
                    dropdownServices.classList.remove('services__list--is-active')
                    if (currentService === servicesListId) {
                        servicesContent[i].classList.add('services__content-container--is-active')
                        servicesListMobile.value[i].classList.add('services__item--is-active')
                    }

                    /* gsap.to(servicesContent[i], {
                        height: servicesContent[i].offsetHeight,
                        duration: .5
                    })*/
                })
            }

            displayService.addEventListener('click', () => {
                if (dropdownServices.classList.contains('services__list--is-active')) {
                    dropdownServices.classList.remove('services__list--is-active')
                } else {
                    dropdownServices.classList.add('services__list--is-active')
                }
            })
        }

        const servicesAside = () => {
            for (let i in servicesListDesktop.value) {
                servicesListDesktop.value[i].addEventListener('mouseover', () => {
                    servicesListDesktop.value[i].classList.add('services__item--is-active')
                })

                servicesListDesktop.value[i].addEventListener('mouseleave', () => {
                    servicesListDesktop.value[i].classList.remove('services__item--is-active')

                    if (servicesListDesktop.value[i].classList.contains('services__item--is-active')) {
                        servicesListDesktop.value[i].classList.add('services__item--is-active')
                    }
                })

                servicesListDesktop.value[i].addEventListener('click', () => {
                    const servicesListId = servicesListDesktop.value[i].dataset.id
                    const idTo = '#' + servicesListId + 'Desktop'
                    // let offsetYMiddle = (window.innerHeight - panels[i].offsetHeight) / 2

                    servicesListDesktop.value[i].classList.remove('services__item--is-active')
                    gsap.to(window, {scrollTo: {y: idTo, offsetY: 100}})
                    servicesListDesktop.value[i].classList.add('services__item--is-active')
                })
            }

            panels.forEach((panel, index) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top center',
                    end: 'bottom center',
                    onEnterBack: () => {
                        servicesListDesktop.value[index].classList.add('services__item--is-active')
                    },
                    onEnter: () => {
                        servicesListDesktop.value[index].classList.add('services__item--is-active')
                    },
                    onLeave: () => {
                        servicesListDesktop.value[index].classList.remove('services__item--is-active')
                    },
                    onLeaveBack: () => {
                        servicesListDesktop.value[index].classList.remove('services__item--is-active')
                    }
                })
            })
        }

        document.querySelectorAll('.services__container').forEach((item) => {
            if (item.classList.contains('services__mobile')) {
                servicesDropmenu();
            } else if (item.classList.contains('services__desktop')) {
                servicesAside();
            }
        })

    }) 

</script>
 

<template>
    <section class="services" id="services">
        <div class="container services__container services__mobile">
            <div class="flexbox services__wrapper">
                <div class="services__aside flexbox__column--is-w4 flexbox__column--is-md-w6 flexbox__column--is-sm-w12">
                    <h1 class="services__title">{{ blok.Services_list }}</h1>
                    <div class="services__aside-wrapper">
                        <span class="services__display-selected">{{ displayValue }}</span>
                            <ul class="services__list">
                                <li v-for="service in services" :key="service._uid">
                                    <span v-if="service.disable === false" :id="'service_' + service.id" @click="selectedValue(service.name)" ref="servicesListMobile"  class="services__item" :data-id="service.id"> 
                                        {{ service.name }}
                                    </span>
                                </li>
                            </ul>
                        <span class="services__message">
                            {{ blok.message }}
                        </span>
                    </div>
                </div>
                <div class="flexbox__column--is-w8 flexbox__column--is-md-w6 flexbox__column--is-sm-w12">
                    <div class="services__content-container" v-for="service in services" :key="service._uid" :id="service.id">
                        <span v-if="service.disable === false">
                            <h1 class="services__title"> {{ service.name }} </h1>
                            <ul class="services__content">
                                <service 
                                    v-for="item, index in service.service_content" 
                                    :key="index"
                                    :name="item.name"
                                    :price="item.price"
                                    :tax="item.tax"
                                    :extra_info="item.extra_info"
                                />
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container services__container services__desktop">
            <div class="flexbox services__wrapper">
                <div class="services__aside flexbox__column--is-w4 flexbox__column--is-md-w6 flexbox__column--is-sm-w12">
                    <h1 class="services__title">{{ blok.Services_list }}</h1>
                    <div class="services__aside-wrapper">
                        <span class="services__display-selected">{{ displayValue }}</span>
                            <ul class="services__list">
                                <li v-for="service in services" :key="service._uid">
                                    <span v-if="service.disable === false" :id="'service_' + service.id" @click="selectedValue(service.name)" ref="servicesListDesktop"  class="services__item" :data-id="service.id"> 
                                        {{ service.name }}
                                    </span>
                                </li>
                            </ul>
                        <span class="services__message">
                            {{ blok.message }}
                        </span>
                    </div>
                </div>
                <div class="flexbox__column--is-w8 flexbox__column--is-md-w6 flexbox__column--is-sm-w12">
                    <div class="services__content-container" v-for="service in services" :key="service._uid" :id="service.id + 'Desktop'">
                        <span v-if="service.disable === false">
                            <h1 class="services__title"> {{ service.name }} </h1>
                            <ul class="services__content">
                                <service 
                                    v-for="item, index in service.service_content" 
                                    :key="index"
                                    :name="item.name"
                                    :price="item.price"
                                    :tax="item.tax"
                                    :extra_info="item.extra_info"
                                />
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>