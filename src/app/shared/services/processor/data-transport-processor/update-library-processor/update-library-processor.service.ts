import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateLoadedLibraryService } from './update-loaded-library.service';
import { UpdateLibraryResultInterpreterService }
	from './update-library-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class UpdateLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: UpdateLoadedLibraryService,
		__resultInterpreter: UpdateLibraryResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
