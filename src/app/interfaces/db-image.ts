export interface DBImage {
	_id: string; // unique, never changes.
	_library_id: string; // compound index, combined with 'name'.
	src: string;
	name?: string; // compound index, combined with '_library_id'.
	description?: string;
	tags?: string[]; // indexed
	date?: Date;
	location?: string;
}
