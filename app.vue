<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useSummaryStore } from '@/stores/summary';

const { summary } = await queryContent("/summary").findOne();

const tree = parseSummary(summary);
const flattened = flatten(tree);

const summaryStore = useSummaryStore();
summaryStore.setTree(tree);
summaryStore.setFlattened(flattened);
</script>
