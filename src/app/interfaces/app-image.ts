export interface AppImage {
	_id: number // must never change, must be unique in its library.
	src: string;
	name?: string;
	description?: string;
	tags?: string[];
	date?: Date;
	location?: string;
}
