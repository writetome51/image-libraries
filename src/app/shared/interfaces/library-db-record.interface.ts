import { HasIDKey } from '@interfaces/has-id-key.interface';
import { HasUserIDKey } from '@interfaces/has-user-id-key.interface';
import { HasName } from '@interfaces/has-name';
// import { ImageDBRecord } from './image-db-record.interface';


export interface LibraryDBRecord extends HasIDKey, HasUserIDKey, HasName {

	// Foreign keys, each relating to ImageDBRecord._id
	// They're listed in order they appear in library.
	_image_ids: string[];

}
