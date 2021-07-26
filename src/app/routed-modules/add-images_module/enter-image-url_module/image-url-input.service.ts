import { ImageURLInputTextData } from '@runtime-state-data/image-url-input-text.data';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';
import { EnterImageURLServicesModule } from './enter-image-url-services.module';


@Injectable({providedIn: EnterImageURLServicesModule})
export class ImageURLInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'image-url-input';
		this.data.objectToBind = ImageURLInputTextData;
		this.data.propertyToBind = 'data';
		this.data.label = 'Image URL';

		this.data.isValid = [
			() => (this.data.objectToBind[this.data.propertyToBind].length > 0),
			() => (not(this.data.objectToBind[this.data.propertyToBind].includes(' ')))
		];
		this.data.errorMessage = [
			'The url input cannot be empty',
			'The url cannot contain spaces'
		];
		this.data.prompt = 'Or, enter image URL if image is stored elsewhere:';
	}

}
