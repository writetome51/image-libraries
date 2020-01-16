import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';
import { RequestedLibraryService } from '../library/requested-library.service';


@Injectable({providedIn: 'root'})

export class LibraryNameInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'library-name-input';
		this.data.propertyToBind = 'data';
		this.data.objectToBind = RequestedLibraryService;
		this.data.label = 'Library Name';

		this.data.isValid = [
			() => (this.data.objectToBind[this.data.propertyToBind].length !== 0),
			() => (not(this.data.objectToBind[this.data.propertyToBind].includes(' ')))
		];
		this.data.errorMessage = [
			`The library name cannot be empty`,
			`The library name cannot include spaces`
		];
	}

}
