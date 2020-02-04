// Represents a document in a MongoDB 'images' collection.

export interface DBImage {
	_id: string; // unique, never changes. Primary key

	// Foreign key, relating to DBLibrary._id .  Compound index, combined with 'name'
	_library_id: string;

	name?: string; // compound index, combined with '_library_id'

	src: string;

	description?: string;

	tags?: string[]; // indexed

	date?: Date;

	location?: string;
}
