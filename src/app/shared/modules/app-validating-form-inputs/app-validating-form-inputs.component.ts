import { Component, Input } from '@angular/core';
import { ValidatingInput } from '@writetome51/validating-inputs';


@Component({
	selector: 'app-validating-form-inputs',
	template: `
		<app-validating-form-input *ngFor="let input of data" [data]="input">
		</app-validating-form-input>
	`
})

// Can be used with ValidatingFormInputsComponent from '@writetome51/validating-inputs'
// Also, create equivalent UI component of this for ReactJS.

export class AppValidatingFormInputsComponent {

	@Input() data: ValidatingInput[];

}
