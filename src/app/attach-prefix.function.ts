import { ValidatingInputService } from './validating-inputs/validating-input.service';


export function attachPrefix(
	obj: ValidatingInputService,
	prefix,
	attachToPropertyToBind = false
) {
	prefix = prefix.toLowerCase().trim();

	obj.data.id = prefix + '-' + obj.data.id;

	if (attachToPropertyToBind) obj.data.propertyToBind = prefix + obj.data.placeholder;

	let capitalizedStr = prefix[0].toUpperCase() + prefix.slice(1);
	obj.data.placeholder = capitalizedStr + ' ' + obj.data.placeholder;

	obj.data.errorMessage = 'The ' + prefix + ' ' + obj.data.errorMessage.slice(4);
}


export function attachCurrentPrefix(obj) {
	attachPrefix(obj, 'current');
}


export function attachNewPrefix(obj) {
	attachPrefix(obj, 'new', true);
}
