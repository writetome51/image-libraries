import { FormDataTransportProcessorService } from './form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryCreatorService } from '../library/library-creator.service';
import { NewLibraryInputsService } from '../validating-inputs/new-library-inputs.service';
import { NewLibraryResultInterpreterService }
	from './data-transport-result-interpreter/new-library-result-interpreter.service';
import { NewLibraryData as newLibrary}
	from '../../../data-structures/runtime-state-data/new-library.data';


@Injectable({providedIn: 'root'})

export class CreateLibraryProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __libraryCreator: LibraryCreatorService,
		__newLibraryInputs: NewLibraryInputsService,
		__newLibraryResultInterpreter: NewLibraryResultInterpreterService
	) {
		super(__newLibraryInputs, __newLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__libraryCreator.create(newLibrary.name);
	}

}
