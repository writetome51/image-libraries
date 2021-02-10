import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { RemoveImageFromLibraryResultInterpreterService }
	from './remove-image-from-library-result-interpreter/remove-image-from-library-result-interpreter.service';
import { RemoveImageFromLibraryService } from './remove-image-from-library.service';


@Injectable({providedIn: 'root'})
export class RemoveImageFromLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: RemoveImageFromLibraryService,
		__resultInterpreter: RemoveImageFromLibraryResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
