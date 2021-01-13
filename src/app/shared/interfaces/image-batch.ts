import { DBImage } from './db-image';


export interface ImageBatch {

	batch: DBImage[];

	from: 'library' | 'all'; // They're either images from a library, or all a user's images.

}
