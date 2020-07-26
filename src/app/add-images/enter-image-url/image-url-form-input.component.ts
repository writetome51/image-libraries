import { Component } from '@angular/core';
import { ImageURLInputService } from './image-url-input.service';
import { ValidatingFormInputComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'image-url-form-input',
	template: `<app-validating-form-input [data]="input"></app-validating-form-input>`
})
export class ImageURLFormInputComponent extends ValidatingFormInputComponent {

	constructor(__imageURLInput: ImageURLInputService) {
		super(__imageURLInput);
	}

}
