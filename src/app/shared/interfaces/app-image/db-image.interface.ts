import { AppImage } from './app-image.interface';


// Represents a record in a db 'images' collection.

export interface DBImage extends AppImage {

	_id: string; // unique, never changes. Primary key

	// Unique, never changes.
	// Foreign key, relating to DBUser._id .  Compound index, combined with inherited 'name'
	_user_id: string;

}
