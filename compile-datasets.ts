import fs from 'fs';

interface FileOutput{
    files: string[];
    lastUpdated: Date | null;
    createdAt: Date | null;
}

function recurseFiles(path: string, datasetId: string): FileOutput {
    const directoryStructure = fs.readdirSync(path, { withFileTypes: true });

    let files: string[] = [];

    let lastUpdated = null;
    let createdAt = null;

    for (let child of directoryStructure) {
        if (child.isDirectory()) {
            const tmp = recurseFiles(`${path}/${child.name}`, datasetId);
            files = [...files, ...tmp.files];

            lastUpdated = tmp.lastUpdated;
            createdAt = tmp.createdAt;
        }

        if (child.isFile()) {
            const stats = fs.statSync(`${path}/${child.name}`);

            if (lastUpdated === null || stats.mtime > lastUpdated) {
                lastUpdated = stats.mtime;
            }

            if (createdAt === null || stats.birthtime < createdAt) {
                createdAt = stats.birthtime;
            }
        }

        if (child.isFile() && child.name !== 'meta.json') {
            let subdirectory = path.replace(`./datasets/${datasetId}`, "").replace("/", "");
            files.push(`${subdirectory ? `${subdirectory}/` : ""}${child.name}`);
        }
    }

    return { files, lastUpdated, createdAt };
}

function processDatasetDirectory(path: string, datasetId: string) {
    const directoryStructure = fs.readdirSync(path, { withFileTypes: true });

    let meta = null;

    for (let child of directoryStructure) {
        if (child.isFile() && child.name === 'meta.json') {
            try {
                meta = JSON.parse(fs.readFileSync(`${path}/${child.name}`, 'utf8'));
            } catch (e) {
                console.log(datasetId);
                console.log(e);
            }
        }
    }

    if (meta) {
        const { files, lastUpdated, createdAt } = recurseFiles(path, datasetId);
        meta.files = files;
        meta.id = datasetId;
        meta.lastUpdated = lastUpdated;
        meta.createdAt = createdAt;
    }

    return meta;
}

const processDatasets = () => {
    const directoryStructure = fs.readdirSync('./datasets', { withFileTypes: true });

    const datasets = [];

    for (let child of directoryStructure) {
        if (child.isDirectory()) {
            const meta = processDatasetDirectory(`./datasets/${child.name}`, child.name);
            if (meta) datasets.push(meta);
        }
    }

    return datasets;
}

function main(){
    const datasets = processDatasets();
    
    if (!fs.existsSync("json")) {
        fs.mkdirSync("json");
    }

    fs.writeFileSync('./json/datasets.json', JSON.stringify(datasets, null, 2));
}

main();

export {};