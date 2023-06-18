<template>
  <nav class="w-48 border-r p-4">
    <ol class="flex flex-col gap-2">
      <li
        v-for="chapter in chapters"
        :key="chapter.title"
        class="w-full"
      >
        <NuxtLink
          :class="{
            'font-bold': chapter._path === page._path,
            'text-gray-500': chapter._path !== page._path,
          }"
          class="block w-full hover:text-blue-500 transition"
          :to="chapter._path"
        >
          {{ chapter.title }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  chapters: ParsedContent[],
    page: ParsedContent
}>()
</script>
