import { ValidatingInput } from './validating-input';
import { ValidatingInputsService } from './validating-inputs.service';


export abstract class ValidatingFormInputsComponent {


	constructor(private __validatingInputs: ValidatingInputsService) {
	}


	get inputs(): ValidatingInput[] {
		return this.__validatingInputs.data;
	}


}
