import { ISanityHomePage } from '@root/src/backend/queries/pages/home/interface';
import Hero from '@root/src/sections/hero/normal';
import Head from 'next/head';
import { SectionBuilder } from 'src/builder/sections';
import ListContentSection from '@root/src/sections/list-content';
import Footer from '@root/src/layout/footer';
import { heroProps } from '@root/src/sections/hero/normal/mock-data';
import { listContentSectionProps } from '@root/src/sections/list-content/mock-data';

interface Props {
  data: ISanityHomePage;
}

export default function HomePageBuilder({ data }: Props) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="py-2 text-center">This is a server side example</h1>
      <Hero {...heroProps} />
      <ListContentSection {...listContentSectionProps} />
      <SectionBuilder sections={data.sections} />
      <Footer />
    </>
  );
}
