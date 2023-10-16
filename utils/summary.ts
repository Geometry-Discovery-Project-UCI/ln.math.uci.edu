export interface SummaryItem {
    title: string;
    url: string;
    chapters?: SummaryItem[];
}

interface Path {
    title: string;
    url?: string;
    sectionNumber: number;
}

export interface ParsedSummaryItem {
    title: string;
    url: string;
    chapters?: ParsedSummaryItem[];
    path: Path[];
}

function parse(items: SummaryItem[], path: Path[]): ParsedSummaryItem[] {
    if (items.length === 0) {
        return [];
    }

    const result: ParsedSummaryItem[] = [];

    for (const [index, item] of items.entries()) {
        const newPath = [...path, {
            title: item.title,
            url: item.url,
            sectionNumber: index + 1,
        }];

        const newItem: ParsedSummaryItem = {
            title: item.title,
            url: item.url,
            path: newPath,
        }

        if (item.chapters && item.chapters.length > 0) {
            newItem.chapters = parse(item.chapters, newPath);
        }

        result.push(newItem);
    }

    return result;
}

export function parseSummary(items: SummaryItem[]): ParsedSummaryItem[] {
    return parse(items, []);
}

function flattenRecursive(items: ParsedSummaryItem[], result: Map<string, ParsedSummaryItem>): void {
    for (const item of items) {
        result.set(item.url || '', item);

        if (item.chapters) {
            flattenRecursive(item.chapters, result);
        }
    }
}

export function flatten(items: ParsedSummaryItem[]): Map<string, ParsedSummaryItem> {
    const result: Map<string, ParsedSummaryItem> = new Map<string, ParsedSummaryItem>();
    flattenRecursive(items, result);
    return result;
}