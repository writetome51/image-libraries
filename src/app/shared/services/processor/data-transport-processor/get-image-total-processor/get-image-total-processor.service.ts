import { DataTransportProcessorService } from '../data-transport-processor.service';
import { GetLibraryImageTotalService }
	from './get-library-image-total-processor/get-library-image-total.service';
import { InterpretGetImageTotalResultService }
	from './get-image-total-result-interpreter/interpret-get-image-total-result.service';
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
