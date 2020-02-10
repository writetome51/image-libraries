export interface AppImage {

	name: string; // indexed

	src: string;

	description?: string;

	tags?: string[]; // indexed

	date?: Date;

	rating?: number; // from 1 to 5

	location?: { latitude: number, longitude: number }; // use with Google maps

}
