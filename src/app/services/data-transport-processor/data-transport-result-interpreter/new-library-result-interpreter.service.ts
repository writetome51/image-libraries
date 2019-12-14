import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { NewLibraryResultCheckService }
	from './data-transport-result-check/new-library-result-check.service';
import { NewLibraryResultProcessorService }
	from './result-processor/new-library-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class NewLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__newLibraryResultCheck: NewLibraryResultCheckService,
		__newLibraryResultProcessor: NewLibraryResultProcessorService,
	) {
		super(__newLibraryResultCheck, __newLibraryResultProcessor);
	}

}
