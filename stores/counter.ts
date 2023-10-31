import { StoreDefinition } from "pinia";

function counter() {
    const count = ref(0);
    function increment() {
        count.value++;
    }
    function zero() {
        count.value = 0;
    }
    return { count, increment, zero };
}

export type CounterStore = StoreDefinition<string, {
    "count": number;
}, {}, {
    increment: () => void;
    zero: () => void;
}>

export const useTheoremCounterStore: CounterStore = defineStore('theoremCounter', counter);
export const useDefinitionCounterStore: CounterStore = defineStore('definitionCounter', counter);
export const usePropositionCounterStore: CounterStore = defineStore('propositionCounter', counter);
export const useExerciseCounterStore: CounterStore = defineStore('exerciseCounter', counter);