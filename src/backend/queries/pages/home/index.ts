import { pageSectionsFragment } from './../../fragments/sections/index';
import { linkFragment } from './../../fragments/general/link';
import { groq } from 'next-sanity';

export const homePageQuery = groq`
*[_type == "homePage"][0]{
	title,
	slug,
	description,
	optionalLink{
		${linkFragment}
	},
	sections[]{
		${pageSectionsFragment}
	}
}
`;
