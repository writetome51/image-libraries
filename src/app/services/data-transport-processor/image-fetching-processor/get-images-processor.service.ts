import { DataTransportProcessorService } from '../data-transport-processor.service';
import { GetImagesFromStorageService } from '../../image/get-images-from-storage.service';
import { GetImagesResultInterpreterService }
	from '../data-transport-result-interpreter/get-images-result-interpreter.service';


export abstract class GetImagesProcessorService extends DataTransportProcessorService {

	constructor(
		protected _getImagesFromStorage: GetImagesFromStorageService,
		__getImagesResultInterpreter: GetImagesResultInterpreterService
	) {
		super(__getImagesResultInterpreter);
	}

}
