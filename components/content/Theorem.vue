<template>
    <div
        class="bg-orange-100 dark:bg-base-200 border-orange-500 dark:border-range-800 min-h-12 opacity-90 w-full px-4 py-2 rounded-xl my-6 border-[1px]">
        <div class="absolute font-serif font-bold mt-[-1.5rem] px-4 ml-2 text-white bg-orange-400 dark:bg-orange-500">
            {{ name }} {{ flattened?.get(route.fullPath)?.path.map(v => v.sectionNumber).join('.') }}.{{ count }}
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTheoremCounterStore as useCounterStore } from "@/stores/counter";
import { useSummaryStore } from "@/stores/summary";

const route = useRoute()
const { flattened } = useSummaryStore();

const counter = useCounterStore();
counter.increment();
const count = counter.count;

withDefaults(defineProps<{
    name?: string
}>(), {
    name: "Theorem"
});
</script>