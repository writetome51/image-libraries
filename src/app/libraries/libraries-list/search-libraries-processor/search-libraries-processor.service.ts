import { Injectable } from '@angular/core';
import { SearchLibrariesService } from './search-libraries.service';
import { ProcessorService } from '@processor/processor.service';
import { ProcessResultInterpreterService } from '@processor/process-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class SearchLibrariesProcessorService extends ProcessorService {

	constructor(
		__getResult: SearchLibrariesService,
		__resultInterpreter: ProcessResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
