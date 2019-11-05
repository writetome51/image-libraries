import { Injectable } from '@angular/core';
import { ValidatingInput } from './validating-input';
import { not } from '@writetome51/not';


@Injectable({
	providedIn: 'root'
})
export class InputsValidatorService {

	inputs: ValidatingInput[];
	private __index: number; // index in this.data

	private get __input() {
		return this.inputs[this.__index];
	}


	validate(index): void {
		this.__index = index;

		if (not(this.__input.isValid())) {
			this.__input.error = this.__input.errorMessage;
		}
		else this.__input.error = '';
	}


}
