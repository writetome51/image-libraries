import { AppLibrary } from './app-library';


// Represents a document in a MongoDB 'libraries' collection.

export interface DBLibrary extends AppLibrary {
	_id: string; // unique, never changes.  Primary key, indexed.

	_user_id: string;	// unique, never changes.  Foreign key, relating to DBUser._id.
}				  		// Combined with inherited 'name' as compound index.
						// '_user_id' and 'name' must be unique pair.
