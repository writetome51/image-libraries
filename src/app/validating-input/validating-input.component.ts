import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';


@Component({
	selector: 'validating-input',
	templateUrl: './validating-input.component.html'
})
export class ValidatingInputComponent {


	errorMessage = '';
	protected _ifTrue_isNotValid: () => boolean;


	constructor(private __alert: AlertService) {
	}


	validate(): void {
		if (this._ifTrue_isNotValid()) {
			this.__alert.error = this.errorMessage;
		}
	}


}
