import Head from 'next/head';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { client } from 'src/backend/client';
import Footer from '@root/src/layout/footer';
import HeroWithOverlapContent from '@root/src/sections/hero/overlap';
import { heroWithOverlapContentProps } from '@root/src/sections/hero/overlap/mock-data';
import { ISanityHomePage } from '@root/src/backend/queries/pages/home/interface';
import { homePageQuery } from '@root/src/backend/queries/pages/home';
import { SectionBuilder } from '@root/src/builder/sections';

const Home: NextPage = () => {
  const { data, isLoading } = useSWR<ISanityHomePage>(homePageQuery, (query) =>
    client.fetch(query)
  );

  if (isLoading) {
    return (
      <>
        {
          <div className="flex h-screen w-screen items-center justify-center">
            Loading...
          </div>
        }
      </>
    );
  }

  if (data) {
    return (
      <>
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeroWithOverlapContent
          {...heroWithOverlapContentProps}
          title="Client Side Example"
        />

        <SectionBuilder sections={data?.sections} />

        <Footer />
      </>
    );
  } else {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Data Not Found!
      </div>
    );
  }
};

export default Home;
