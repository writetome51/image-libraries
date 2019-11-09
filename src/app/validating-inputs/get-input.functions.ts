import { ValidatingInput } from './validating-input';
import { modifyObject } from '@writetome51/modify-object';


export function getDefaultInput(): ValidatingInput {
	return {
		type: undefined,
		id: undefined,
		objectToBind: undefined,
		propertyToBind: undefined,
		placeholder: undefined,
		hideLabel: true,
		required: true,
		isValid: undefined,
		errorMessage: undefined,
		error: '',
		prompt: undefined
	};
}


export function getDefaultTextInput(): ValidatingInput {
	return getDefaultTypeInput('text');
}


export function getDefaultPasswordInput(): ValidatingInput {
	return getDefaultTypeInput('password');
}


export function getDefaultTypeInput(type: string): ValidatingInput {
	let input = getDefaultInput();
	modifyObject(input, {type});
	return input;
}
