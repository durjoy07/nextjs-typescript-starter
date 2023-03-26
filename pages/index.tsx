import { client, previewClient } from '@root/src/backend/client';
import { lazy } from 'react';
import { homePageQuery } from '@root/src/backend/queries/pages/home';
import { ISanityHomePage } from '@root/src/backend/queries/pages/home/interface';
import type { GetServerSideProps, NextPage } from 'next';
import { PreviewComponent } from 'src/components/preview-component';
const PreviewPageBuilder = lazy(() => import('src/builder/pages/home/preview'));
import HomePageBuilder from 'src/builder/pages/home';

interface Props {
  data: ISanityHomePage;
  preview: boolean;
  token?: string;
}

const Home: NextPage<Props> = ({ data, preview, token }) => {
  if (preview && token) {
    return (
      <PreviewComponent>
        <PreviewPageBuilder token={token} />
      </PreviewComponent>
    );
  }
  return <HomePageBuilder data={data} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps<
  {},
  {},
  { token: string }
> = async ({ preview = false, previewData }) => {
  let data;

  if (preview) {
    data = await previewClient.fetch<ISanityHomePage>(homePageQuery);
    return {
      props: {
        data,
        preview,
        token: previewData?.token,
      },
    };
  }

  data = await client.fetch<ISanityHomePage>(homePageQuery);

  return {
    props: {
      data,
      preview: false,
    },
  };
};
