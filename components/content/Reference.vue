<template>
    <span>{{ count }}</span>
</template>

<script setup lang="ts">
import { useTheoremsStore } from "@/stores/theorems";

const props = defineProps<{
    tag: string
}>()

const { get } = useTheoremsStore();
const count = get(props.tag);
</script>