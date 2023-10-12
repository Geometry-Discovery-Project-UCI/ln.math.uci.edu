// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Lecture Notes',
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
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
  tailwindcss: {
    configPath: './tailwind.config.js',
    viewer: false,
  }
})
