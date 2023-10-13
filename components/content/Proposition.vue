<template>
    <div
        class="bg-blue-100 dark:bg-base-200 border-blue-500 dark:border-blue-800 min-h-12 opacity-90 w-full px-4 py-2 rounded-xl my-6 border-[1px]">
        <div class="absolute font-serif font-bold mt-[-1.5rem] px-4 ml-2 text-white bg-blue-400 dark:bg-blue-800">
            {{ name }} {{ flattened?.get(route.fullPath)?.path.map(v => v.sectionNumber).join('.') }}.{{ count }}
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePropositionCounterStore as useCounterStore } from "@/stores/counter";
import { useSummaryStore } from "@/stores/summary";

const route = useRoute()
const { flattened } = useSummaryStore();

const counter = useCounterStore();
counter.increment();
const count = counter.count;

withDefaults(defineProps<{
    name?: string
}>(), {
    name: "Proposition"
});
</script>