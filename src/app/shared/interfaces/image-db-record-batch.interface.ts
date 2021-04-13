import { ImageDBRecord } from './image-db-record.interface';


export interface ImageDBRecordBatch {

	images: ImageDBRecord[];

	from: 'library' | 'all'; // They're either images from a library, or all a user's images.

}
