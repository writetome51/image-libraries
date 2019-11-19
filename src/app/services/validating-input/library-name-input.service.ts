import { Injectable } from '@angular/core';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';


@Injectable({providedIn: 'root'})

export class LibraryNameInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'library-name-input';
		this.data.propertyToBind = 'name';
		this.data.label = 'Library Name';

		this.data.isValid = () => (this.data.objectToBind[this.data.propertyToBind].length !== 0);
		this.data.errorMessage = `The library name cannot be empty`;
	}

}
