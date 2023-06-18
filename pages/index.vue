<template>
  <div class="grid grid-cols-4 gap-4 p-4">
    <NuxtLink
      v-for="book in books"
      :key="`book-${book.title}`"
      :to="book._path"
      class="flex h-48 place-items-center place-content-center select-none"
      :class="{
        'bg-gray-200': !book.image
      }"
    >
      {{ book.title }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { navigation: books } = useContent()

useHead({
  title: 'Home'
})
</script>
