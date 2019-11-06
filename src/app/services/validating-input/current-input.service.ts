import { Injectable } from '@angular/core';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { ValidatingInput } from '../../validating-inputs/validating-input';


@Injectable({
	providedIn: 'root'
})
export abstract class CurrentInputService {

	data: ValidatingInput;

	constructor(private __validatingInput: ValidatingInputService) {
		this.data = this.__validatingInput.data;

		this.data.id = 'current-' + this.data.id;
		this.data.placeholder = 'Current ' + this.data.placeholder;
		this.data.errorMessage = 'The current ' + this.data.errorMessage.slice(4);
	}

}
