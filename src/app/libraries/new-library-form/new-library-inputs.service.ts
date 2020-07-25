import { Injectable } from '@angular/core';
import { LibraryNameInputService } from './library-name-input.service';
import { ValidatingInputsService } from '@writetome51/validating-inputs';


@Injectable({providedIn: 'root'})

export class NewLibraryInputsService extends ValidatingInputsService {

	constructor(__libraryNameInput: LibraryNameInputService) {
		super(__libraryNameInput);
	}

}
