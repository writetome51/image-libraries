import { Injectable } from '@angular/core';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { SearchInputService } from '@search/search-input.service';
import { SearchService } from '@search/search-processor/search.service';
import { SearchResultInterpreterService } from './search-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class SearchProcessorService extends FormDataTransportProcessorService {

	private __search: SearchService;


	constructor(
		__validatingInput: SearchInputService,
		__resultInterpreter: SearchResultInterpreterService
	) {
		super(__validatingInput, __resultInterpreter);
	}


	setSearcher(value: SearchService) {
		this.__search = value;
	}


	protected async _getResult(): Promise<any[] | { error: { message: string } }> {
		return await this.__search.go();
	}

}
