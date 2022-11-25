<script setup>
    defineProps({
        blok: {
            type: Object,
            default: () => ({}),
        }
    })
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="flexbox">
                <div class="flexbox__column--is-w6">
                    <form class="footer__newsletter">
                        <label class="footer__newsletter__title">{{ $t('Join our newsletter') }}</label>
                        <input class="footer__newsletter__input" type="email" placeholder="Email Address" />
                        <small class="footer__newsletter__info">{{ $t('Sign up to receive special offers and exclusive news about Spa Dahlia.') }}</small>
                    </form>
                    <div class="footer__business-hours" >
                        <div class="flexbox" v-for="item of blok.Business_hours" :key="item._uid" >
                            <span class="footer__business-hours__days">
                                {{ item.days }}
                            </span>
                            <span class="footer__business-hours__times">
                                {{ item.hours }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flexbox__column--is-w6">
                    <div class="footer__contact">
                        <h1 class="footer__contact__title">{{ $t('Visit us at') }}</h1>
                        <span class="footer__contact__address">{{ blok.address }}</span>
                        <span class="footer__contact__phone">{{ blok.phone }}<br>{{ blok.phone_2 }}</span>
                        <span class="footer__contact__email">{{ blok.email }}</span>
                        <ul class="footer__social">
                            <li class="footer__social__item" v-for="social of blok.social" :key="social._uid">
                                <a :href="social.link.url" class="footer__social__link">
                                    <img class="footer__social__image" :src="social.icon.filename" :alt="social.text" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>