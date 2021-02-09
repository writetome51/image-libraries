import { CreateLibraryResultInterpreterService }
	from './create-library-result-interpreter/create-library-result-interpreter.service';
import { CreateLibraryService } from './create-library.service';
import { DBLibrary } from '@interfaces/db-library.interface';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../library-name-input.service';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class CreateLibraryProcessorService extends FormDataTransportProcessorService {

	constructor(
		__libraryNameInput: LibraryNameInputService,
		__createLibrary: CreateLibraryService,
		__resultInterpreter: CreateLibraryResultInterpreterService
	) {
		super(__libraryNameInput, __createLibrary, __resultInterpreter);
	}

}
