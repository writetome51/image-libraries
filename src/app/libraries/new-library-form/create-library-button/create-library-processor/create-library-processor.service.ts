import { CreateLibraryResultInterpreterService } from './create-library-result-interpreter.service';
import { DBLibrary } from '../../../../shared/interfaces/db-library';
import { FormDataTransportProcessorService }
	from '../../../../shared/services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryCreatorService } from './library-creator.service';
import { NewLibraryInputsService } from '../../new-library-inputs.service';


@Injectable({providedIn: 'root'})

export class CreateLibraryProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __libraryCreator: LibraryCreatorService,
		__newLibraryInputs: NewLibraryInputsService,
		__createLibraryResultInterpreter: CreateLibraryResultInterpreterService
	) {
		super(__newLibraryInputs, __createLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__libraryCreator.create();
	}

}
