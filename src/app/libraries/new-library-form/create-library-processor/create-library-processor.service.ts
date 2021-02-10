import { CreateLibraryResultInterpreterService }
	from './create-library-result-interpreter/create-library-result-interpreter.service';
import { CreateLibraryService } from './create-library.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../library-name-input.service';


@Injectable({providedIn: 'root'})
export class CreateLibraryProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: LibraryNameInputService,
		__getResult: CreateLibraryService,
		__resultInterpreter: CreateLibraryResultInterpreterService
	) {
		super(__validatingInput, __getResult, __resultInterpreter);
	}

}
