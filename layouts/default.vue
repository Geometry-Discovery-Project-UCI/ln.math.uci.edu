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
                <div class="flex- 1 btn btn-ghost px-2 mx-2 lg:hidden">
                    <NuxtLink href="/">Lecture Notes</NuxtLink>
                </div>
                <!-- Navbar menu content here -->
                <div class="flex-none hidden lg:block">
                    <ul class="menu menu-horizontal">
                        <li><a>Navbar Item 1</a></li>
                        <li><a>Navbar Item 2</a></li>
                    </ul>
                </div>
            </div>
            <!-- Page content here -->
            <article class="prose px-8 max-w-none">
                <slot></slot>
            </article>
        </div>
        <div class="drawer-side">
            <label for="home-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="h-16 bg-base-200 sticky top-0 z-20 hidden items-center gap-2 px-4 backdrop-blur lg:flex ">
                <div class="btn btn-ghost px-2 py-1">
                    <NuxtLink href="/">Lecture Notes</NuxtLink>
                </div>
            </div>
            <TreeMenu :data="summary" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { body: summary } = await queryContent("/summary").findOne();
</script>