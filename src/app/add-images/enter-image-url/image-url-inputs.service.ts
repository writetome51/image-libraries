import { Injectable } from '@angular/core';
import { ImageUrlInputService } from './image-url-input.service';
import { ValidatingInputsService } from '@writetome51/validating-inputs';


@Injectable({providedIn: 'root'})

export class ImageUrlInputsService extends ValidatingInputsService {

	constructor(__imageURLInput: ImageUrlInputService) {
		super(__imageURLInput);
	}

}
