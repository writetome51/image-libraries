import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { GetLibraryNamesResultProcessorService }
	from './run-tasks-needed-after-successful-result/get-library-names-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class GetLibraryNamesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__getLibraryNamesResultProcessor: GetLibraryNamesResultProcessorService
	) {
		super(
			__dataTransportResultCheck,
			__getLibraryNamesResultProcessor
		);
	}

}
