<template>
    <div class="mx-auto lg:w-[1024px] p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div class="card bg-base-100 shadow-xl" v-for="book in books">
            <figure class="bg-base-300">
                <div class="h-80 w-64 flex place-items-center text-center">
                    <div class="w-full">{{ book.title }}</div>
                </div>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ book.title }}</h2>
                <p>{{ book.description }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" @click="navigateTo(book.url)">Read</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { books } = await queryContent("/books").findOne();
</script>