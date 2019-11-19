import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { Injectable } from '@angular/core';
import { LibraryCreatorService } from '../library/library-creator.service';
import { NewLibraryInputsService } from '../validating-inputs/new-library-inputs.service';


@Injectable({providedIn: 'root'})

export class NewLibraryProcessorService extends FormDataOperationProcessorService {

	constructor(
		private __libraryCreator: LibraryCreatorService,
		__newLibraryInputs: NewLibraryInputsService,
		__newLibraryResultInterpreter
	) {
		super(__newLibraryInputs, __newLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__libraryCreator.create();
	}

}
