import { DataTransportProcessorService } from '../data-transport-processor.service';
import { GetLibraryImageTotalService }
	from './get-library-image-total-processor/get-library-image-total.service';
import { GetImageTotalResultInterpreterService }
	from './get-image-total-result-interpreter/get-image-total-result-interpreter.service';
import { GetUserImageTotalService }
	from './get-user-image-total-processor/get-user-image-total.service';


// Getting the total number of images is required by AppPaginatorDataSource

export abstract class GetImageTotalProcessorService extends DataTransportProcessorService {

	constructor(
		private __getImageTotal: GetLibraryImageTotalService | GetUserImageTotalService,
		__resultInterpreter: GetImageTotalResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected _getResult(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		return this.__getImageTotal.go();
	}

}
