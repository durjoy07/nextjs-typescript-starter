import { groq } from 'next-sanity';
import { blogsGridFragment } from './blogs-grid';

export const pageSectionsFragment = groq`
	${blogsGridFragment}
`;
