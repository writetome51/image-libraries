import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';
import { IDoThis } from '@interfaces/i-do-this.interface';


export interface SendFormData extends IDoThis {

	// Semi-public. Intended to be accessed in only one place.
	$_validatingInputs: ValidatingInputsService | ValidatingInputService;

}
