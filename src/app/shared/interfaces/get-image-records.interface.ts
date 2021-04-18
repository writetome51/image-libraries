import { LoadConfiguration } from '@interfaces/load-configuration.interface';
import { ImageRecordBatch } from '@interfaces/image-record-batch.interface';
import { HasError } from '@interfaces/has-error.interface';
import { GetResult } from '@interfaces/get-result.interface';


export interface GetImageRecords extends GetResult {

	go: (load: LoadConfiguration) => Promise<ImageRecordBatch | HasError>;

}
