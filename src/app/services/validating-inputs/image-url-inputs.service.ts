import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { ImageUrlInputService } from '../validating-input/image-url-input.service';


@Injectable({providedIn: 'root'})

export class ImageUrlInputsService extends AppValidatingInputsService {

	constructor(__imageURLInput: ImageUrlInputService) {
		super(__imageURLInput);
	}

}
