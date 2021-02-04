import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { SearchInputService } from '@search/search-input.service';
import { SearchService } from '@search/search-processor/search.service';


export abstract class SearchProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __search: SearchService,
		__validatingInput: SearchInputService,
		__resultInterpreter: DataTransportProcessResultInterpreterService
	) {
		super(__validatingInput, __resultInterpreter);
	}


	protected async _getResult(): Promise<any[] | { error: { message: string } }> {
		return await this.__search.go();
	}

}
