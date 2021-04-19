import { GetResult } from '@interfaces/get-result.interface';
import { HasError } from '@interfaces/has-error.interface';
import { ImageRecordBatch } from '@interfaces/image-record-batch.interface';
import { LoadConfiguration } from '@interfaces/load-configuration.interface';


export interface GetImageRecords extends GetResult {

	go(load: LoadConfiguration): Promise<ImageRecordBatch | HasError>;

}
