import { FormDataTransportProcessorService }
	from '../../services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryCreatorService }
	from './library-creator.service';
import { NewLibraryInputsService } from '../../services/validating-inputs/new-library-inputs.service';
import { CreateLibraryResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from '../../services/data-transport-processor/data-transport-result-interpreter/create-library-result-interpreter.service';
import { DBLibrary } from '../../../interfaces/db-library';


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
