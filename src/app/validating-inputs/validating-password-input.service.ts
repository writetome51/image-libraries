import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';
import { getDefaultPasswordInput } from './get-input.functions';


// Framework independent

export abstract class ValidatingPasswordInputService implements ValidatingInputService {

	data: ValidatingInput = getDefaultPasswordInput();

}
