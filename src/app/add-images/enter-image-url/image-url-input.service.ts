import { Injectable } from '@angular/core';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';
import { not } from '@writetome51/not';
import { ImageURLData } from '../../../data-structures/runtime-state-data/image-url.data';


@Injectable({providedIn: 'root'})

export class ImageURLInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'image-url-input';
		this.data.objectToBind = ImageURLData;
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
