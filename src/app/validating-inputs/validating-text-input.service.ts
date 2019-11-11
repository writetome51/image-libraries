import { ValidatingInput } from './validating-input';
import { ValidatingInputService } from './validating-input.service';
import { getDefaultTextInput } from './get-input.functions';


// Framework independent

export abstract class ValidatingTextInputService implements ValidatingInputService {

	data: ValidatingInput = getDefaultTextInput();

}
