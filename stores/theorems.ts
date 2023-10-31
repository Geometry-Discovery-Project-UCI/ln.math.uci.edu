export const useTheoremsStore = defineStore('theorems', () => {
    const theorems = ref<Map<String, number>>(new Map<String, number>());

    function set(id: string, count: number) {
        theorems.value.set(id, count);
    }

    function get(id: string) {
        return theorems.value.get(id);
    }

    return { set, get }
});