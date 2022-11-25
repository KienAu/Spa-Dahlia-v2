<script setup>
    const servicesData = defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })

    const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap();

    const services = servicesData.blok.list
    const servicesList = ref(null)


    onMounted(() => {

        const panels = gsap.utils.toArray('.services__content-container')
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

        for (let i in servicesList.value) {
            servicesList.value[i].addEventListener('mouseover', () => {
                servicesList.value[i].classList.add('services__item--is-active')
            })

            servicesList.value[i].addEventListener('mouseleave', () => {
                servicesList.value[i].classList.remove('services__item--is-active')
            })

            servicesList.value[i].addEventListener('click', (e) => {
                servicesList.value[i].classList.remove('services__item--is-active')
                const id = servicesList.value[i].dataset.id
                const idTo = '#' + id
                let offsetYMiddle = (window.innerHeight - panels[i].offsetHeight) / 2
                gsap.to(window, {scrollTo: {y: idTo, offsetY: offsetYMiddle}})
                servicesList.value[i].classList.add('services__item--is-active')
                console.log(panels[i].offsetHeight)
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




</script>
 

<template>
    <section class="services" id="services">
        <div class="container">
            <div class="flexbox">
                <div class="services__aside flexbox__column--is-w4">
                    <h1 class="services__title">{{ $t('Services List') }}</h1>
                    <div class="services__aside-wrapper">

                        <ul class="services__list" >
                            <li ref="servicesList" v-for="service in services" :key="service._uid" class="services__item" :data-id="service.id"> 
                                {{ service.name }} 
                            </li>
                        </ul>
                        <span class="services__message">
                            {{ blok.message }}
                        </span>
                    </div>
                </div>
                <div class="flexbox__column--is-w8">
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
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>