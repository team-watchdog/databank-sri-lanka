import { GetServerSideProps } from 'next';
import { ArrowRightIcon, FolderIcon } from "@heroicons/react/outline";
import ReactMarkdown from 'react-markdown';

import { getDataset } from "../../common/dataset";

// types
import { Dataset } from '../../types/dataset';

// styles
import styles from '../../styles/Home.module.css'

// partials
import { DatasetSummary } from '../../partials/DatasetSummary';

// component
import HeadMeta from '../../components/HeadMeta';

const GITHUB_DATASETS_URL = process.env.NEXT_PUBLIC_GITHUB_DATASETS_URL;

interface SingleDatasetProps{
    dataset: Dataset;
}


export default function SingleDataset({ dataset }: SingleDatasetProps) {
    return (
        <>
            <HeadMeta 
                title={`Databank 🇱🇰 — ${dataset.title}`}
                description={dataset.summary}
                image={`../../meta.png`}
            />
            <main className="py-4">
                <div className={styles.container}>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-4">
                            <DatasetSummary dataset={dataset} />
                            <div>
                                <ReactMarkdown>
                                    {dataset.notes}
                                </ReactMarkdown>
                            </div>
                        </div>
                        <div className="col-span-2 bg-blue-50 py-4 px-4 rounded-md h-fit">
                            <h3 className="text-lg font-semibold mb-2 flex flex-row items-center gap-2"><FolderIcon height={20} width={20} /> Files</h3>
                            <div className="flex flex-col gap-1 flex-wrap h-inherit">
                                {dataset.files.map((file, i) => (
                                    <div 
                                        key={i}
                                        className="py-2 px-2 bg-white border border-slate-300 font-semibold rounded-md text-slate-600"
                                    >{file}</div>
                                ))}
                                <a 
                                    href={`${GITHUB_DATASETS_URL}/${dataset.id}`} 
                                    rel="noopener noreferrer"
                                    className="py-4 font-semibold text-indigo-700 flex flex-row items-center"
                                    target={"_blank"}
                                >
                                    <span className="mr-2">Show Files</span> <ArrowRightIcon height={20} width={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
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