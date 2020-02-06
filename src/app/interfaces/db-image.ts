// Represents a document in a MongoDB 'images' collection.

export interface DBImage {
	_id: string; // unique, never changes. Primary key

	// Unique, never changes.
	// Foreign key, relating to DBUser._id .  Compound index, combined with 'name'
	_user_id: string;

	name?: string; // compound index, combined with '_user_id'

	src: string;

	description?: string;

	tags?: string[]; // indexed

	date?: Date;

	location?: string;
}
