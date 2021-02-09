import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { SearchInputService } from '@search/search-input.service';
import { SearchProcessorService } from '@search/search-processor/search-processor.service';
import { Injectable } from '@angular/core';
import { SearchLibrariesService } from './search-libraries.service';


@Injectable({providedIn: 'root'})
export class SearchLibrariesProcessorService extends SearchProcessorService {

	constructor(
		__validatingInput: SearchInputService,
		__search: SearchLibrariesService,
		__resultInterpreter: DataTransportProcessResultInterpreterService
	) {
		super(__validatingInput, __search, __resultInterpreter);
	}

}
