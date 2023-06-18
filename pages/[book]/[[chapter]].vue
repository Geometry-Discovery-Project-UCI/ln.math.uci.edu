<template>
  <div class="flex flex-row">
    <TableOfContent :page="page" :chapters="chapters as ParsedContent[]" />

    <article class="flex-1 p-4 prose max-w-none">
      <ContentDoc />
    </article>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const route = useRoute()
const chapters = await queryContent(`/${route.params.book}/`).only(['title', '_path']).find()

for (let i = 0; i < 50; i++) {
  chapters.push({
    title: `Chapter ${i + 1}`,
    _path: `/${route.params.book}/chapter-${i + 1}`
  })
}

if (!route.params.chapter) {
  navigateTo(chapters[0]._path)
}

const { page } = useContent()

useHead({
  title: page.value.title
})
</script>
