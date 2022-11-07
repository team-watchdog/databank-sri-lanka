import fs from 'fs';
import Fuse from 'fuse.js';

// types
import { Dataset } from '../types/dataset';

export async function getDatasets(searchTerm: string | null, curPage: number) {
    let datasets = [];

    try {
        const datasetJSON = fs.readFileSync('output/datasets.json', 'utf-8');
        datasets = JSON.parse(datasetJSON);
    } catch (e) {
        console.log(e);
    }

    const fuse = new Fuse(datasets, {
        keys: ['title', 'tags', 'summary', 'notes', 'id'],
    });

    if (searchTerm) {
        const temp = fuse.search(searchTerm);
        datasets = temp.map((item) => item.item);
    }

    return datasets;
}

export async function getDataset(id: string) {
    let datasets: Dataset[] = [];

    try {
        const datasetJSON = fs.readFileSync('output/datasets.json', 'utf-8');
        datasets = JSON.parse(datasetJSON);
    } catch (e) {
        console.log(e);
    }

    const dataset = datasets.find((dataset) => dataset.id === id);

    return dataset;
}