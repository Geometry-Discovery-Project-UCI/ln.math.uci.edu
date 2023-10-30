<template>
    <ul class="menu p-2 min-h-full bg-base-200 text-base-content">
        <li v-for="item in tree">
            <NuxtLink :to="item.url">
                {{ item.path.at(-1)?.sectionNumber }}. {{ item.title }}
            </NuxtLink>
            <TreeMenu v-if="item.chapters" :tree="item.chapters" :flattened="flattened" />
        </li>
    </ul>
</template>

<script setup lang="ts">
defineProps<{
    tree: ParsedSummaryItem[];
    flattened: Map<string, ParsedSummaryItem>;
}>();
</script>