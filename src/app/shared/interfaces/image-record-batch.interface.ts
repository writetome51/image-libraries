import { ImageRecord } from './image-record.interface';


export interface ImageRecordBatch {

	images: ImageRecord[];

	from: 'library' | 'all'; // They're either images from a library, or all a user's images.

}
