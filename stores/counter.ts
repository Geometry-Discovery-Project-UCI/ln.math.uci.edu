export const useTheoremCounterStore = defineStore('theoremCounter', () => {
    const count = ref(0);
    function increment() {
        count.value++;
    }
    function zero() {
        count.value = 0;
    }
    return { count, increment, zero };
});

export const useDefinitionCounterStore = defineStore('definitionCounter', () => {
    const count = ref(0);
    function increment() {
        count.value++;
    }
    function zero() {
        count.value = 0;
    }
    return { count, increment, zero };
});

export const usePropositionCounterStore = defineStore('propositionCounter', () => {
    const count = ref(0);
    function increment() {
        count.value++;
    }
    function zero() {
        count.value = 0;
    }
    return { count, increment, zero };
});