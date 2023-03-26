import { imageFragment } from '../../general/image';
import { groq } from 'next-sanity';
import { portableTextFragment } from '../../general/portable-text';

export const blogsGridFragment = groq`
	_type == "blogsGrid" => @->{
		_type,
		title,
		subtitle,
		description[]{
			${portableTextFragment}
		},
		"blogs" : *[_type == "blog"] | order(_updatedAt desc){
			image{
				${imageFragment}
			},
			title,
			tags,
			slug,
			isFeaturedBlog,
			description,
  	}
	}
`;
