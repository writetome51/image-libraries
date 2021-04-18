import { LoadConfiguration } from '@interfaces/load-configuration.interface';
import { GetImageRecords } from '@interfaces/get-image-records.interface';
import { ProcessService } from '@process/process.abstract.service';
import { InterpretGetImageRecordsResult }
	from '@interfaces/interpret-get-image-records-result.interface';


export abstract class ProcessThatSetsLoadedImages extends ProcessService {

	private __getImageRecords: GetImageRecords;

	private __interpretGetImageRecordsResult: InterpretGetImageRecordsResult;

	go: (load: LoadConfiguration) => Promise<void>;

}
