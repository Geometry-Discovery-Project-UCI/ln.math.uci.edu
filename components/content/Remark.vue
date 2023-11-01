<template>
    <CounterBase :name="name" bgColor="bg-slate-100" borderColor="border-slate-500" tagBgColor="bg-slate-600" :useCounterStore="useCounterStore">
        <slot></slot>
    </CounterBase>
</template>

<script setup lang="ts">
import { useRemarkCounterStore as useCounterStore } from "@/stores/counter";

withDefaults(defineProps<{
    name?: string
}>(), {
    name: "Remark"
});
</script>