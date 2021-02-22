import { DBImage } from './db-image.interface';


export interface ImageBatch {

	batch: DBImage[];

	from: 'library' | 'all'; // They're either images from a library, or all a user's images.

}
