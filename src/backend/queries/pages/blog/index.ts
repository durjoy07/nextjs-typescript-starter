import { portableTextFragment } from './../../fragments/general/portable-text';
import { groq } from 'next-sanity';

export const blogQuery = groq`
*[_type == "blog" && slug.current == $slug][0]{
	...,
	blogContent[]{
		${portableTextFragment}
	}
}
`;

export const allBlogsQuery = groq`
	*[_type == "blog"].slug.current
`;
