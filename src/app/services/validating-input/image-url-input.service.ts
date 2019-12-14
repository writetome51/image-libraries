import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class ImageUrlInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'image-url-input';
		this.data.propertyToBind = 'url';
		this.data.label = 'Enter URL';

		this.data.isValid = [
			() => (this.data.objectToBind[this.data.propertyToBind].length >= rules.emailMinLength),
			() => (not(this.data.objectToBind[this.data.propertyToBind].includes(' ')))
		];
		this.data.errorMessage = [
		];
		this.data.prompt = 'Or, enter image URL if image is stored elsewhere:';
	}

}
