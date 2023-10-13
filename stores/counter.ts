export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    function increment() {
        count.value++;
    }
    function zero() {
        count.value = 0;
    }
    return { count, increment, zero };
});