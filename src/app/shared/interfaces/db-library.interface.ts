import { HasIDKey } from '@interfaces/has-id-key.interface';
import { HasUserIDKey } from '@interfaces/has-user-id-key.interface';
// import { DBImage } from './app-image/db-image.interface';


// Represents a record in a db 'libraries' collection.

export interface DBLibrary extends HasIDKey, HasUserIDKey {

	// Compound index, combined with '_user_id'.
	// User cannot have two libraries with same name.
	name: string;

	// listed in order they appear in library.
	// Foreign keys, each relating to DBImage._id
	_image_ids: string[];

}
