import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { UpdateLibraryResultCheckService }
	from './data-transport-result-check/update-library-result-check.service';
import { UpdateLibraryResultProcessorService }
	from './result-processor/update-library-result-processor.service';


@Injectable({providedIn: 'root'})

export class UpdateLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__updateLibraryResultCheck: UpdateLibraryResultCheckService,
		__updateLibraryResultProcessor: UpdateLibraryResultProcessorService,
	) {
		super(__updateLibraryResultCheck, __updateLibraryResultProcessor);
	}

}
