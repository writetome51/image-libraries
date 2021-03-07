import { HasSrc } from '@interfaces/has-src';


export interface HTMLImage extends HasSrc {

	alt: string;

	width: number;

	title?: string;

}
