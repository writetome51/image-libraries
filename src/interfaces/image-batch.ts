import { DBImage } from './db-image';


export interface ImageBatch {
	batch: DBImage[];

	// Not the total images in batch, but total in the dataset the batch came from.
	dataTotal: number;
}
