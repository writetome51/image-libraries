import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { NewLibraryResultProcessorService }
	from './result-processor/new-library-result-processor.service';
import { UpdateOrNewLibraryResultCheckService }
	from './data-transport-result-check/update-or-new-library-result-check.service';


@Injectable({providedIn: 'root'})

export class CreateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__updateLibraryResultCheck: UpdateOrNewLibraryResultCheckService,
		__newLibraryResultProcessor: NewLibraryResultProcessorService,
	) {
		super(__updateLibraryResultCheck, __newLibraryResultProcessor);
	}

}
