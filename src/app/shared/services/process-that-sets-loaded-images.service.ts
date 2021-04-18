import { LoadConfiguration } from '@interfaces/load-configuration.interface';
import { GetImageRecords } from '@interfaces/get-image-records.interface';
import { ProcessService } from '@process/process.abstract.service';
import { InterpretGetImageRecordsResultService }
	from '@interpret-result/interpret-get-image-records-result_service/interpret-get-image-records-result.service';


export abstract class ProcessThatSetsLoadedImagesService extends ProcessService {

	constructor(
		private __getImageRecords: GetImageRecords,
		private __interpretGetImageRecordsResult: InterpretGetImageRecordsResultService
	) {
		super(__getImageRecords, __interpretGetImageRecordsResult);
	}


	go: (load: LoadConfiguration) => Promise<void>;

}
