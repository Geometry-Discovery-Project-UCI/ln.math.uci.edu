<template>
    <CounterBase :name="name" bgColor="bg-blue-100" borderColor="border-blue-500" tagBgColor="bg-blue-600" :useCounterStore="useCounterStore">
        <slot></slot>
    </CounterBase>
</template>

<script setup lang="ts">
import { usePropositionCounterStore as useCounterStore } from "@/stores/counter";

withDefaults(defineProps<{
    name?: string
}>(), {
    name: "Proposition"
});
</script>