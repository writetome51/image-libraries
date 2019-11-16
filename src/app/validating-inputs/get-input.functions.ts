import { ValidatingInput } from './validating-input';
import { modifyObject } from '@writetome51/modify-object';


// framework independent


export function getDefaultInput(): ValidatingInput {
	return {
		type: undefined,
		id: undefined,
		label: undefined,
		showPlaceholder: true,
		hideLabel: true,
		required: true,
		objectToBind: undefined,
		propertyToBind: undefined,
		objectToMatch: undefined,
		propertyToMatch: undefined,
		isValid: undefined,
		errorMessage: undefined,
		error: '',
		prompt: undefined,
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
