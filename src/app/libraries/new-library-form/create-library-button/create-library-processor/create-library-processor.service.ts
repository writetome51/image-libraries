import { CreateLibraryResultInterpreterService } from './create-library-result-interpreter.service';
import { DBLibrary } from '@interfaces/db-library';
import { FormDataTransportProcessorService }
	from '@services/data-processor/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryCreatorService } from './library-creator.service';
import { LibraryNameInputService }
	from '@app/libraries/new-library-form/library-name-input.service';


@Injectable({providedIn: 'root'})
export class CreateLibraryProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __libraryCreator: LibraryCreatorService,
		__libraryNameInput: LibraryNameInputService,
		__resultInterpreter: CreateLibraryResultInterpreterService
	) {
		super(__libraryNameInput, __resultInterpreter);
	}


	protected async _getResult(): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__libraryCreator.create();
	}

}
