import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../validating-input/library-name-input.service';
import { CurrentLibraryInputsService } from './current-library-inputs.service';


@Injectable({providedIn: 'root'})

export class NewLibraryInputsService extends CurrentLibraryInputsService {

	constructor(__libraryNameInput: LibraryNameInputService) {
		super(__libraryNameInput);
	}

}
