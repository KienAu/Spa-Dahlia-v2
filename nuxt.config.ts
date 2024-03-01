import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [['@storyblok/nuxt', { 
        accessToken: process.env.STORYBLOK_API_TOKEN,
        apiOptions: { "region": "us" },
    }, 
    '@nuxtjs/seo']],
    css: ["@/assets/styles/main.scss"],
    routeRules: {
        '/index-french.html': { redirect: '/fr/accueil' },
        '/&sa=U&ved=0ahUKEwjqwNLFhsruAhVFcBQKHfKCCTcQ61gIsEgoEDDaAQ&usg=AOvVaw1wLafaXIYKRi5KtgsnUir': { redirect: '/' },
        '/?pageid=6': { redirect: '/' },
        '/?pageid=1': { redirect: '/' },
        '/?pageid=2': { redirect: '/' },
        '/fr/': { redirect: '/fr/accueil' },
        '/fr': { redirect: '/fr/accueil' },
        '/en/': { redirect: '/' },
        '/index.html': { redirect: '/' },
        '/wp-content/themes/dreamspa/framework/sociable_shortcodes.php': { redirect: '/' },
    },
    vite: {
        plugins: [
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ]
            })
        ]
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1', 
            title: 'Spa Dahlia | nail salon',
            meta: [
                { name: 'description', content: 'The team at Spa Dahlia takes pride to make you look your best, step into a 5-7 with extraordinary shellac colors on your finger nails, well manicured feet that would make heads turn in an instant.' },
                { name: 'ogDescription', content: 'The team at Spa Dahlia takes pride to make you look your best, step into a 5-7 with extraordinary shellac colors on your finger nails, well manicured feet that would make heads turn in an instant.' },
                { name: 'google-site-verification', content: 's_OVbG5CYlMhB2__jgwEGMDgRZZaYtZY9ULydi4n2ds' },
                { name: 'keyword', content: 'nails, nails salon, nail salon, beauty, shellac, finger nails, manicure, pedicure, full set nail, uv gel, ombre gel, brisa gel, fairview, spa, spa dahlia, dahlia, nail salon near me, nails near me, pedicure near me, nail shop near me, french nails, fairview nail salon' }
            ],
            htmlAttrs: {
                lang: 'en_us',
            },
        }
    },
    build: {
        transpile:["gsap"],
    },
    site: {
        url: 'https://www.spadahlia.com/',
        name: 'Spa Dahlia | nail salon',
        description: 'The team at Spa Dahlia takes pride to make you look your best, step into a 5-7 with extraordinary shellac colors on your finger nails, well manicured feet that would make heads turn in an instant.',
        defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
      }
})