import { homePageQuery } from '@root/src/backend/queries/pages/home';
import { usePreview } from 'src/backend/usePreview';
import HomePageBuilder from '.';

interface Props {
  token: string;
}

export default function PreviewMovie({ token }: Props) {
  const data = usePreview(token, homePageQuery);

  return <HomePageBuilder data={data} />;
}
