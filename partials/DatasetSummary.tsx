import { FunctionComponent } from 'react';
import Link from 'next/link';

// components
import { SummaryLine } from '../components/SummaryLine';

// types
import { Dataset } from '../types/dataset';

interface DatasetSummaryProps{
    dataset: Dataset;
}

export const DatasetSummary: FunctionComponent<DatasetSummaryProps> = ({ dataset }) => {
    return (
      <div className="py-4 px-4 bg-slate-100 rounded-md flex flex-col gap-y-4">
        <div>
          <Link href={`/dataset/${dataset.id}`}><h3 className="text-xl font-semibold">{dataset.title}</h3></Link>
          <p className="lg">{dataset.summary}</p>
          <div className="flex flex-row flex-wrap gap-1 py-2">
            {dataset.tags.map((tag, i) => (
              <span key={i} className="py-1 px-2 bg-indigo-600 rounded-xl text-white text-sm">{tag}</span>
            ))}
          </div>
        </div>
        <div>
          <SummaryLine 
            label="Created At"
          >
            <span>{dataset.createdAt ? new Date(dataset.createdAt).toLocaleDateString() : "—"}</span>
          </SummaryLine>
          <SummaryLine 
            label="Last Updated"
          >
            <span>{dataset.lastUpdated ? new Date(dataset.lastUpdated).toLocaleDateString() : "—"}</span>
          </SummaryLine>
          </div>
      </div>
    )
  }