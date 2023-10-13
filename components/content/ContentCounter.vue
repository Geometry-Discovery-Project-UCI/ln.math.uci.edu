<template>
    <div>{{ count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
counter.increment();
const count = counter.count;
</script>