import { GetImageRecords } from '@interfaces/get-image-records.interface';
import { InterpretGetImageRecordsResultService }
	from '@interpret-result/interpret-get-image-records-result_service/interpret-get-image-records-result.service';
import { LoadConfiguration } from '@interfaces/load-configuration.interface';
import { ProcessService } from '@process/process.abstract.service';


export abstract class ProcessThatSetsLoadedImagesService extends ProcessService {

	constructor(
		private __getImageRecords: GetImageRecords,
		private __interpretGetImageRecordsResult: InterpretGetImageRecordsResultService
	) {
		super(__getImageRecords, __interpretGetImageRecordsResult);
	}


	go: (loadConfig: LoadConfiguration) => Promise<void>;

}
