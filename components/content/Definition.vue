<template>
    <CounterBase :name="name" bgColor="bg-green-100" borderColor="border-green-500" tagBgColor="bg-green-600" :useCounterStore="useCounterStore">
        <slot></slot>
    </CounterBase>
</template>

<script setup lang="ts">
import { useDefinitionCounterStore as useCounterStore } from "@/stores/counter";

withDefaults(defineProps<{
    name?: string
}>(), {
    name: "Definition"
});
</script>