import { DataTransportProcessorService } from '../data-transport-processor.abstract.service';
import { GetLibraryImageTotalService }
	from './get-library-image-total-processor/get-library-image-total.service';
import { InterpretGetImageTotalResultService }
	from './interpret-get-image-total-result/interpret-get-image-total-result.abstract.service';
import { GetUserImageTotalService }
	from './get-user-image-total-processor/get-user-image-total.service';


// Getting the total number of images is required by AppPaginatorDataSource

export abstract class GetImageTotalProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: GetLibraryImageTotalService | GetUserImageTotalService,
		__interpretResult: InterpretGetImageTotalResultService
	) {
		super(__getResult, __interpretResult);
	}

}
