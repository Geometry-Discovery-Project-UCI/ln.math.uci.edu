<template>
    <div class="drawer lg:drawer-open">
        <input id="home-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full navbar sticky top-0 bg-base-100 h-16">
                <div class="flex-none lg:hidden">
                    <label for="home-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <NuxtLink to="/" class="flex-1 btn btn-ghost px-2 mx-2 lg:hidden">Lecture Notes</NuxtLink>
                <!-- Navbar menu content here -->
                <div class="flex-none hidden lg:block">
                    <div class="mx-2 text-sm breadcrumbs">
                        <ul>
                            <li>
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li v-for="p in flattened.get(fullPath)?.path">
                                <NuxtLink :to="p.url">{{ p.title }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Page content here -->
            <article
                class="prose px-8 max-w-[100vw] prose-p:my-2 prose-p:text-black dark:prose-p:text-white prose-h1:text-green-700 ">
                <h1>{{ prefix ? `${prefix}.` : "" }} {{ doc.title }}</h1>
                <ContentRenderer :value="doc">
                    <template #empty>
                        <p>
                            Navigate using the sidebar on the left.
                        </p>
                    </template>
                </ContentRenderer>
            </article>
        </div>
        <div class="drawer-side">
            <label for="home-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="h-16 bg-base-200 sticky top-0 z-20 hidden items-center gap-2 px-4 backdrop-blur lg:flex">
                <NuxtLink to="/" class="btn btn-ghost px-2 py-1">Lecture Notes</NuxtLink>
            </div>
            <TreeMenu :tree="tree" :flattened="flattened" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDefinitionCounterStore, useEquationCounterStore, useExerciseCounterStore, useLemmaCounterStore, usePropositionCounterStore, useRemarkCounterStore, useTheoremCounterStore } from '@/stores/counter';
import { useSummaryStore } from '@/stores/summary';

const { fullPath } = useRoute()

const summaryUrl = `/${fullPath.split('/')[1]}/summary`;
const { summary } = await queryContent(summaryUrl).findOne();
const doc = await queryContent(fullPath).findOne();

const tree = parseSummary(summary);
const flattened = flatten(tree);
const prefix = flattened.get(fullPath)?.path.map(v => v.sectionNumber).join('.');

const summaryStore = useSummaryStore();
summaryStore.setTree(tree);
summaryStore.setFlattened(flattened);

useTheoremCounterStore().zero();
useLemmaCounterStore().zero();
useDefinitionCounterStore().zero();
usePropositionCounterStore().zero();
useExerciseCounterStore().zero();
useRemarkCounterStore().zero();
useEquationCounterStore().zero();
</script>