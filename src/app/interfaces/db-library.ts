// Represents a document in a MongoDB 'libraries' collection.

export interface DBLibrary {
	_id: string; // unique, never changes. Primary key

	// unique, never changes.  Foreign key, relating to DBUser._id.
	// Compound index, combined with 'name'.
	// '_user_id' and 'name' must be unique pair.
	_user_id: string;

	name: string; // Compound index, combined with '_user_id'

	// listed in order they appear in library.
	// Foreign keys, each relating to DBImage._id
	_image_ids: string[];
}
