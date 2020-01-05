import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../validating-input/library-name-input.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';


@Injectable({providedIn: 'root'})

export class NewLibraryInputsService extends AppValidatingInputsService {

	constructor(__libraryNameInput: LibraryNameInputService) {
		super(__libraryNameInput);
	}

}
