<template>
    <ul class="menu p-2 min-h-full bg-base-200 text-base-content">
        <li v-for="(item, index) in data">
            <NuxtLink :to="item.url">{{ _prefix }}{{ index + 1 }}. {{ item.title }}</NuxtLink>
            <TreeMenu v-if="item.chapters" :data="item.chapters" :_prefix="`${_prefix}${index + 1}.`" />
        </li>
    </ul>
</template>

<script setup lang="ts">
interface MenuItem {
    title: string;
    url?: string;
    chapters?: MenuItem[];
}

withDefaults(defineProps<{
    data: MenuItem[];
    _prefix: string;
}>(), {
    _prefix: '',
});
;
</script>