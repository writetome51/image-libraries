import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


export function attachPrefix(
	obj: ValidatingInputService,
	prefix,
	attachToPropertyToBind = false
) {
	prefix = prefix.toLowerCase().trim();

	obj.data.id = prefix + '-' + obj.data.id;

	if (attachToPropertyToBind) obj.data.propertyToBind = prefix + obj.data.placeholder;

	let capitalizedPrefix = prefix[0].toUpperCase() + prefix.slice(1);
	obj.data.placeholder = capitalizedPrefix + ' ' + obj.data.placeholder;

	obj.data.errorMessage = 'The ' + prefix + ' ' + obj.data.errorMessage.slice(4);
}


export function attachCurrentPrefix(obj: ValidatingInputService) {
	attachPrefix(obj, 'current');
}


export function attachNewPrefix(obj: ValidatingInputService) {
	attachPrefix(obj, 'new', true);
}
