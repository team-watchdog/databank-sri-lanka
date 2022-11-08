import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useState, useCallback, useEffect } from 'react';
import { debounce } from "lodash";

// styles
import styles from '../styles/Home.module.css'

// components
import { InputText } from '../components/Input/InputText';
import { Pagination } from '../components/Pagination';
import HeadMeta from '../components/HeadMeta';

// partials
import { DatasetSummary } from '../partials/DatasetSummary';

// common
import { getDatasets } from '../common/dataset';

// types
import { Dataset } from '../types/dataset';

interface HomeProps{
  page: number;
  count: number;
  tags: string[];
  searchQuery: string;
  datasets: Dataset[];
}

export default function Home({ count, page, tags, searchQuery, datasets }: HomeProps) {
  const { push } = useRouter();

  const [ searchTerm, setSearchTerm ] = useState<string>(searchQuery);

  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [ searchQuery ])

  const handlePageChange = (newPage: number) => {
    push({
      query: {
        page: newPage,
        tags,
        searchQuery,
      }
    });
  };

    const updateSearchQuery = async (text: string) => {
      push({
        query: {
          page: 0,
          tags: [],
          searchQuery: text,
        }
      });
  }

  const debouncedChangeHandler = useCallback(debounce(updateSearchQuery, 400), []);

  const onSearchTermChange = (value: string) => {
      setSearchTerm(value);
      debouncedChangeHandler(value);
  }

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Databank 🇱🇰 — Powered by WatchDog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadMeta 
        title="Databank 🇱🇰 — Powered by WatchDog"
        description="We are building a collaborative platform to create and collect key datasets."
        image={`meta.png`}
      />

      <main className="py-4">
        <p className={styles.description}>
        </p>
        <div className="flex flex-col">
          <InputText 
            placeholder="Start searching for datasets using keywords"
            value={searchTerm}
            onChange={(value) => {
              onSearchTermChange(value);
            }}
          />
        </div>
        {/*
        <div className="py-4">
          <div className="flex flex-row flex-wrap gap-1">
            {["Education", "Health", "Economy", "Environment", "Social"].map((category, i) => (
              <Link href="" key={i}>
                <Tag type="primary">
                  {category}
                  <span className="font-semibold">12</span>
                </Tag>
              </Link>
            ))}
          </div>
        </div>
        */}
        <div className="flex flex-col gap-2 py-4">
          {datasets.map((dataset, i) => (
            <DatasetSummary key={i} dataset={dataset} />
          ))}
        </div>
        <div className="py-2">
          <Pagination 
              page={page}
              limit={10}
              count={count}
              onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page, tags, searchQuery} = query;

  const curPage = page ? parseInt(`${page}`) : 0;

  const datasets = await getDatasets(searchQuery as string ?? null, curPage);

  return {
    props: {
      page: page ? parseInt(`${page}`) : 0, 
      tags: tags ?? [], 
      searchQuery: searchQuery ?? "",
      count: datasets.length,
      datasets: datasets.slice(curPage * 10, (curPage + 1) * 10),
    }
  }
}