<script setup>
    const servicesData = defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })

    const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap()

    const services = servicesData.blok.list
    const servicesList = ref(null)
    const serviceItem = ref(null)


    let displayValue = ref(services[0].name)

    const selectedValue = (e) => {
        displayValue.value = e
    }

    onMounted(() => {

        const panels = gsap.utils.toArray('.services__content-container')
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

        let mm = gsap.matchMedia();
        mm.add('(min-width: 769px)', () => {

            for (let i in servicesList.value) {
                servicesList.value[i].addEventListener('mouseover', () => {
                    servicesList.value[i].classList.add('services__item--is-active')
                })

                servicesList.value[i].addEventListener('mouseleave', () => {
                    servicesList.value[i].classList.remove('services__item--is-active')

                    if (servicesList.value[i].classList.contains('services__item--is-active')) {
                        servicesList.value[i].classList.add('services__item--is-active')
                    }
                })

                servicesList.value[i].addEventListener('click', () => {
                    const servicesListId = servicesList.value[i].dataset.id
                     const idTo = '#' + servicesListId
                    // let offsetYMiddle = (window.innerHeight - panels[i].offsetHeight) / 2

                    servicesList.value[i].classList.remove('services__item--is-active')
                    gsap.to(window, {scrollTo: {y: idTo, offsetY: 100}})
                    servicesList.value[i].classList.add('services__item--is-active')
                })
            }

            panels.forEach((panel, index) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top center',
                    end: 'bottom center',
                    onEnterBack: () => {
                        servicesList.value[index].classList.add('services__item--is-active')
                    },
                    onEnter: () => {
                        servicesList.value[index].classList.add('services__item--is-active')
                    },
                    onLeave: () => {
                        servicesList.value[index].classList.remove('services__item--is-active')
                    },
                    onLeaveBack: () => {
                        servicesList.value[index].classList.remove('services__item--is-active')
                    }
                })
            })
        })

        mm.add('(max-width: 768px)', () => {
            const displayService = document.querySelector('.services__display-selected')
            const dropdownServices = document.querySelector('.services__list')
            const servicesContent = document.querySelectorAll('.services__content-container')
            let currentService = servicesContent[0].id

            if (currentService === servicesContent[0].id) {
                servicesContent[0].classList.add('services__content-container--is-active')                           
            }

            for (let i in servicesList.value) {
                servicesList.value[i].classList.remove('services__item--is-active')
                servicesList.value[0].classList.add('services__item--is-active')
                const servicesListId = servicesList.value[i].dataset.id
                
                servicesList.value[i].addEventListener('click', (e) => {

                    currentService = servicesContent[i].id

                    for (const item of servicesContent) {
                        item.classList.remove('services__content-container--is-active')
                    }

                    for (const service of servicesList.value) {
                        service.classList.remove('services__item--is-active')
                    }
                    
                    dropdownServices.classList.remove('services__list--is-active')
                    if (currentService === servicesListId) {
                        servicesContent[i].classList.add('services__content-container--is-active')
                        servicesList.value[i].classList.add('services__item--is-active')
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
        })  

    }) 

</script>
 

<template>
    <section class="services" id="services">
        <div class="container">
            <div class="flexbox services__wrapper">
                <div class="services__aside flexbox__column--is-w4 flexbox__column--is-md-w6 flexbox__column--is-sm-w12">
                    <h1 class="services__title">{{ blok.Services_list }}</h1>
                    <div class="services__aside-wrapper">
                        <span class="services__display-selected">{{ displayValue }}</span>
                        <ul class="services__list">
                            <li :id="'service_' + service.id " @click="selectedValue(service.name)" ref="servicesList" v-for="service in services" :key="service._uid" class="services__item" :data-id="service.id"> 
                                {{ service.name }} 
                            </li>
                        </ul>
                        <span class="services__message">
                            {{ blok.message }}
                        </span>
                    </div>
                </div>
                <div class="flexbox__column--is-w8 flexbox__column--is-md-w6 flexbox__column--is-sm-w12">
                    <div class="services__content-container" v-for="service in services" :key="service._uid" :id="service.id">
                        <h1 class="services__title"> {{ service.name }} </h1>
                        <ul class="services__content">
                            <service 
                                v-for="item, index in service.service_content" 
                                :key="index"
                                :name="item.name"
                                :price="item.price"
                                :tax="item.tax"
                                :extra_info="item.extra_info"
                                ref="serviceItem"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>