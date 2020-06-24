import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { GetLibraryResultProcessorService }
	from './run-tasks-needed-after-successful-result/get-library-result-processor.service';
import { GetLibraryResultCheckService }
	from './data-transport-result-check/get-library-result-check.service';


@Injectable({providedIn: 'root'})

export class GetLibraryResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getLibraryResultCheck: GetLibraryResultCheckService,
		__getLibraryResultProcessor: GetLibraryResultProcessorService,
	) {
		super(__getLibraryResultCheck, __getLibraryResultProcessor);
	}

}
