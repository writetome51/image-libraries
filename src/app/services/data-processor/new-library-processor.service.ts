import { FormDataProcessorService } from './form-data-processor.service';
import { Injectable } from '@angular/core';
import { LibraryCreatorService } from '../library/library-creator.service';
import { NewLibraryInputsService } from '../validating-inputs/new-library-inputs.service';
import { NewLibraryResultInterpreterService }
	from './result-interpreter/new-library-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class NewLibraryProcessorService extends FormDataProcessorService {

	constructor(
		private __libraryCreator: LibraryCreatorService,
		__newLibraryInputs: NewLibraryInputsService,
		__newLibraryResultInterpreter: NewLibraryResultInterpreterService
	) {
		super(__newLibraryInputs, __newLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__libraryCreator.create();
	}

}
