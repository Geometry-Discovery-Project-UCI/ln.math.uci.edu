<template>
    <CounterBase :name="name" bgColor="bg-orange-100" borderColor="border-orange-500" tagBgColor="bg-orange-600" :useCounterStore="useCounterStore">
        <slot></slot>
    </CounterBase>
</template>

<script setup lang="ts">
import { useLemmaCounterStore as useCounterStore } from "@/stores/counter";

withDefaults(defineProps<{
    name?: string
}>(), {
    name: "Lemma"
});
</script>