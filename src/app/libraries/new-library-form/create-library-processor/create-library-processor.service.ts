import { CreateLibraryResultInterpreterService }
	from './create-library-result-interpreter/create-library-result-interpreter.service';
import { CreateLibraryService } from './create-library.service';
import { DBLibrary } from '@interfaces/db-library';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../library-name-input.service';


@Injectable({providedIn: 'root'})
export class CreateLibraryProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __createLibrary: CreateLibraryService,
		__libraryNameInput: LibraryNameInputService,
		__resultInterpreter: CreateLibraryResultInterpreterService
	) {
		super(__libraryNameInput, __resultInterpreter);
	}


	protected async _getResult(): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__createLibrary.go();
	}

}
