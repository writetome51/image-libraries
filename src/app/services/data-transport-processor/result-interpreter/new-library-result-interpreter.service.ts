import { Injectable } from '@angular/core';
import { ResultInterpreterService } from './result-interpreter.service';
import { NewLibraryResultCheckService }
	from './data-process-result-check/new-library-result-check.service';
import { NewLibraryResultProcessorService }
	from './result-processor/new-library-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class NewLibraryResultInterpreterService extends ResultInterpreterService {

	constructor(
		__newLibraryResultCheck: NewLibraryResultCheckService,
		__newLibraryResultProcessor: NewLibraryResultProcessorService,
	) {
		super(__newLibraryResultCheck, __newLibraryResultProcessor);
	}

}
