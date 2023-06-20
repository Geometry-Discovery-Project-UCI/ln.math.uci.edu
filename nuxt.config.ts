// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: [
        ['rehype-mathjax', {
          tex: {
            tags: 'ams',
            macros: {
              eps: '{\\varepsilon}',
              Q: '{\\mathbb{Q}}',
              R: '{\\mathbb{R}}',
              C: '{\\mathbb{C}}',
              Z: '{\\mathbb{Z}}',
              F: '{\\mathbb{F}}',
              N: '{\\mathbb{N}}'
            }
          }
        }]
      ]
    }
  },
  app: {
    head: {
      titleTemplate: '%s | UCI Math Lecture Notes'
    }
  }
})
