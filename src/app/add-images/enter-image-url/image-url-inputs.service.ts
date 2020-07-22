import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from '../../shared/services/validating-inputs/app-validating-inputs.service';
import { ImageUrlInputService } from './image-url-input.service';


@Injectable({providedIn: 'root'})

export class ImageUrlInputsService extends AppValidatingInputsService {

	constructor(__imageURLInput: ImageUrlInputService) {
		super(__imageURLInput);
	}

}
