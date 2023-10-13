import { ParsedSummaryItem, SummaryItem } from "@/utils/summary";

export const useSummaryStore = defineStore('summary', () => {
    const tree = ref<ParsedSummaryItem[] | null>(null);
    const flattened = ref<Map<string, ParsedSummaryItem> | null>(null);

    function setTree(t: SummaryItem[]) {
        tree.value = parseSummary(t);
    }

    function setFlattened(f: Map<string, ParsedSummaryItem>) {
        flattened.value = f;
    }

    return { tree, flattened, setTree, setFlattened }
});