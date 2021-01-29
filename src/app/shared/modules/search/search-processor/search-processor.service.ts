import { Injectable } from '@angular/core';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { SearchInputService } from '@search/search-input.service';
import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { SearchService } from '@search/search-processor/search.service';


@Injectable({providedIn: 'root'})
export class SearchProcessorService extends FormDataTransportProcessorService {

	private __search: SearchService;


	constructor(
		__validatingInput: SearchInputService,
		__resultInterpreter: DataTransportProcessResultInterpreterService
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
