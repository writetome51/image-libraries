import { ValidatingInput } from './validating-input';
import { ValidatingInputsService } from './validating-inputs.service';


/***********
Create a subclass and attach the @Component decorator to it,
 just like this:

 @Component({
	selector: 'selector-of-subclass',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
 **********/
export abstract class ValidatingFormInputsComponent {


	constructor(private __validatingInputs: ValidatingInputsService) {
	}


	get inputs(): ValidatingInput[] {
		return this.__validatingInputs.data;
	}


}
