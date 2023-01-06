import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [['@storyblok/nuxt', { 
        accessToken: process.env.STORYBLOK_API_TOKEN,
        apiOptions: { "region": "us" }
    }]],
    css: ["@/assets/styles/main.scss"],
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
            viewport: 'initial-scale=1', 
            title: 'Spa Dahlia',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'Located in the heart of the west island, in the prestigious Cadillac Fairview shopping center, Spa Dahlia takes nail fashion to a new level. The team at Spa Dahlia takes pride to make you look your best, step into a 5-7 with extraordinary shellac colors on your finger nails, well manicured feet that would make heads turn in an instant.' }
            ],
        }
    },
    build: {
        transpile:["gsap"],
    },
})