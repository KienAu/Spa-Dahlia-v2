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
            viewport: 'width=500, initial-scale=1', 
            title: 'Spa Dahlia',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    },
    build: {
        transpile:["gsap"],
    },
})