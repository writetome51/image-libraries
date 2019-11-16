import { ValidatingInput } from './validating-input';
import { ValidatingInputsService } from './validating-inputs.service';


/***********
To be used with ValidatingInputsComponent.
To use, create a subclass and attach @Component to it, like so:

 @Component({
	selector: 'example-form-inputs',

	// write this exactly as-is:
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class ExampleFormInputsComponent extends ValidatingFormInputsComponent {...}
 **********/

export abstract class ValidatingFormInputsComponent {


	constructor(private __validatingInputs: ValidatingInputsService) {
	}


	get inputs(): ValidatingInput[] {
		return this.__validatingInputs.data;
	}


}
