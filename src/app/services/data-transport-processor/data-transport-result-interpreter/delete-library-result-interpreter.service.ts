import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { DeleteLibraryResultProcessorService }
	from './result-processor/delete-library-result-processor.service';


@Injectable({providedIn: 'root'})

export class DeleteLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheckService: DataTransportResultCheckService,
		__deleteLibraryResultProcessor: DeleteLibraryResultProcessorService
	) {
		super(__dataTransportResultCheckService, __deleteLibraryResultProcessor);
	}

}
