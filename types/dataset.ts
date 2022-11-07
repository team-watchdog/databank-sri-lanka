export interface Dataset{
    id: string;
    title: string;
    summary: string;
    notes: string;
    tags: string[];
    files: string[];
    createdAt: Date | null;
    lastUpdated: Date | null;
}