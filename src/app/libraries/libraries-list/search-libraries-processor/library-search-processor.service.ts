import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { SearchInputService } from '@search/search-input.service';
import { SearchService } from '@search/search-processor/search.service';
import { SearchProcessorService } from '@search/search-processor/search-processor.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class SearchLibrariesProcessorService extends SearchProcessorService {

	constructor(
		__search: SearchService,
		__validatingInput: SearchInputService,
		__resultInterpreter: DataTransportProcessResultInterpreterService
	) {
		super(__search, __validatingInput, __resultInterpreter);
	}


}
