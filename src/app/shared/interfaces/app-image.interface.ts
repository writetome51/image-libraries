import { HasName } from '@interfaces/has-name';
import { HasSrc } from '@interfaces/has-src';


export interface AppImage extends HasName, HasSrc {

	size: number;

	description?: string;

	tags?: string[]; // indexed

	date?: Date;

	rating?: number; // from 1 to 5

	location?: { latitude: number, longitude: number }; // use with Google maps

}
