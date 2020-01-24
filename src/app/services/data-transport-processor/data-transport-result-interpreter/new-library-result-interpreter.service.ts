import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { NewLibraryResultProcessorService }
	from './result-processor/new-library-result-processor.service';
import { UpdateLibraryResultCheckService }
	from './data-transport-result-check/update-library-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class NewLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__updateLibraryResultCheck: UpdateLibraryResultCheckService,
		__newLibraryResultProcessor: NewLibraryResultProcessorService,
	) {
		super(__updateLibraryResultCheck, __newLibraryResultProcessor);
	}

}
