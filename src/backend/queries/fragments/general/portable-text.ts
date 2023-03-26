import { imageFragment } from './image';
import { linkFragment } from './link';

const markDefFragment = `
    markDefs[]{
        ...,
        ${linkFragment}
    }
`;

const internalBlockFragment = `
	_type == 'internalBlock' => @{
		...,
		content[]{
			...,
			${markDefFragment},
		}
	}
`;

export const portableTextFragment = `
    ...,
    ${markDefFragment},
    ${internalBlockFragment},
    _type == "customImageSchema" => @{
        ${imageFragment}
    },
     _type == "customVideoSchema" => @{
        ${imageFragment}
    }
`;
