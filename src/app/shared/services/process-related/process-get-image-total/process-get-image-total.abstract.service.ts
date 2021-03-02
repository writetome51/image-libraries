import { ProcessDataTransportService } from '../process-data-transport.abstract.service';
import { InterpretGetImageTotalResultService }
	from './interpret-get-image-total-result.abstract.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


// Getting the total number of images is required by AppPaginatorDataSource

export abstract class ProcessGetImageTotalService extends ProcessDataTransportService {

	constructor(
		__getResult: IDoThis,
		__interpretResult: InterpretGetImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
