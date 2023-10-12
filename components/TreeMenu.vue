<template>
    <ul class="menu p-2 min-h-full bg-base-200 text-base-content">
        <li v-for="item in data">
            <details v-if="item.chapters">
                <summary>{{ item.title }}</summary>
                <TreeMenu :data="item.chapters" />
            </details>
            <NuxtLink v-else :href="item.url">{{ item.title }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
interface MenuItem {
    title: string;
    url?: string;
    chapters?: MenuItem[];
}

defineProps<{
    data: MenuItem[];
}>();
</script>