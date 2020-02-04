// Represents a document in a MongoDB 'libraries' collection.

export interface DBLibrary {
	name: string; // Combined with '_user_id' as compound index.

	_image_ids: string[]; // listed in order they appear in library.

	_id: string; // unique, never changes.  Primary key, indexed.

	_user_id: string;	// unique, never changes.  Foreign key, relating to DBUser._id.
}				  		// Combined with 'name' as compound index.
						// '_user_id' and 'name' must be unique pair.
