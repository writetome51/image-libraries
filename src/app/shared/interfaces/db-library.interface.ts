import { HasIDKey } from '@interfaces/has-id-key.interface';
import { HasUserIDKey } from '@interfaces/has-user-id-key.interface';
import { HasName } from '@interfaces/has-name';
// import { DBImage } from './app-image/db-image.interface';


// Represents a record in a db 'libraries' collection.

export interface DBLibrary extends HasIDKey, HasUserIDKey, HasName {

	// listed in order they appear in library.
	// Foreign keys, each relating to DBImage._id
	_image_ids: string[];

}
