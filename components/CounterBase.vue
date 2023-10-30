<template>
    <div class="dark:bg-base-200 w-full min-h-12 px-4 py-2 rounded-xl my-6 border-[1px] flex flex-col items-start"
        :class="`${bgColor} ${borderColor}`">
        <div class="font-serif font-bold mt-[-1.5rem] px-4 ml-2 text-white" :class="`${tagBgColor}`">
            {{ name }} {{ count }}
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CounterStore } from "@/stores/counter";

const props = defineProps<{
    name: string
    bgColor: string
    borderColor: string
    tagBgColor: string
    useCounterStore: CounterStore
}>();

const counter = props.useCounterStore();
counter.increment();
const count = counter.count;
</script>