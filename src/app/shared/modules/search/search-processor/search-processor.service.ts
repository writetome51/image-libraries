import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { SearchInputService } from '@search/search-input.service';
import { SearchService } from '@search/search-processor/search.service';


export abstract class SearchProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: SearchInputService,
		__search: SearchService,
		__resultInterpreter: DataTransportProcessResultInterpreterService
	) {
		super(__validatingInput, __search, __resultInterpreter);
	}

}
