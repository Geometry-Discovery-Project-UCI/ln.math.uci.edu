<template>
  <header class="bg-white p-4 text-lg font-bold border-b select-none">
    <NuxtLink to="/">
      {{ title }}
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
