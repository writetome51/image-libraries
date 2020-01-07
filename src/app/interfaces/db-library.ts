import { AppImage } from './app-image';


// Represents a document in a MongoDB 'libraries' collection.

export interface DBLibrary {
	name: string;
	images: AppImage[]; // 'tags' property of each image is indexed.

	_id: string; // unique, never changes.  Primary key, indexed.

	_user_id: string;	// unique, never changes.  Foreign key, relating to DBUser._id.
}				  		// Combined with inherited 'name' as compound index.
						// '_user_id' and 'name' must be unique pair.
