<template>
    <CounterBase :name="name" bgColor="bg-yellow-100" borderColor="border-yellow-500" tagBgColor="bg-yellow-600" :useCounterStore="useCounterStore">
        <slot></slot>
    </CounterBase>
</template>

<script setup lang="ts">
import { useExerciseCounterStore as useCounterStore } from "@/stores/counter";

withDefaults(defineProps<{
    name?: string
}>(), {
    name: "Exercise"
});
</script>