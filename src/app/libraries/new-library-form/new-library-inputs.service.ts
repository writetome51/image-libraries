import { Injectable } from '@angular/core';
import { LibraryNameInputService } from './library-name-input.service';
import { AppValidatingInputsService }
	from '../../shared/services/validating-inputs/app-validating-inputs.service';


@Injectable({providedIn: 'root'})

export class NewLibraryInputsService extends AppValidatingInputsService {

	constructor(__libraryNameInput: LibraryNameInputService) {
		super(__libraryNameInput);
	}

}
