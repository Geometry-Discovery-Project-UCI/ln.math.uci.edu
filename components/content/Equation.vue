<template>
    <div class="flex flex-row">
        <div class="flex-1">
            <slot></slot>
        </div>
        <div class="flex-none my-auto">({{ count }})</div>
    </div>
</template>

<script setup lang="ts">
import { useEquationCounterStore as useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
counter.increment();
const count = counter.count;

withDefaults(defineProps<{
    name?: string
}>(), {
    name: "Equation"
});
</script>