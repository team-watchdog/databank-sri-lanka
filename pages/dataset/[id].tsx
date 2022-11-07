import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';

import { getDataset } from "../../common/dataset";

// types
import { Dataset } from '../../types/dataset';

// styles
import styles from '../../styles/Home.module.css'

// partials
import { DatasetSummary } from '../../partials/DatasetSummary';

interface SingleDatasetProps{
    dataset: Dataset;
}


export default function SingleDataset({ dataset }: SingleDatasetProps) {
    return (
        <main className="py-4">
            <div className={styles.container}>
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-4">
                        <DatasetSummary dataset={dataset} />
                    </div>
                    <div className="col-span-2 bg-blue-50 py-4 px-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">Files</h3>
                        <div className="flex flex-col gap-1 flex-wrap h-inherit">
                            {dataset.files.map((file, i) => (
                                <a 
                                    href=""
                                    key={i}
                                >
                                    <div 
                                        className="py-2 px-2 bg-white border border-slate-300 font-semibold rounded-md text-indigo-600"
                                    >{file}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (!params) return { notFound: true };

    const dataset = await getDataset(params.id as string);

    if (!dataset) return { notFound: true };

    return {
        props: {
            dataset,
        }
    }
}