import { ImageRecord } from './image-record.interface';
import { ImagesOrigin } from '@app/shared/types/images-origin.type';


export interface ImageRecordBatch {

	images: ImageRecord[];

	from: ImagesOrigin;

}
