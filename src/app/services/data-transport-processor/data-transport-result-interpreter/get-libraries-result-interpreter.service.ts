import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { DataTransportResultCheckService }
	from './data-transport-result-check/data-transport-result-check.service';
import { GetLibrariesResultProcessorService }
	from './result-processor/get-libraries-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class GetLibrariesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__dataTransportResultCheck: DataTransportResultCheckService,
		__getLibrariesResultProcessor: GetLibrariesResultProcessorService
	) {
		super(
			__dataTransportResultCheck,
			__getLibrariesResultProcessor
		);
	}

}
