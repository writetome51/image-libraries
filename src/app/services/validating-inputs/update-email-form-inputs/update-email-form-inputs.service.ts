import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from '../app-validating-inputs.service';
import { UpdateEmailFormInputsConfigService } from './update-email-form-inputs-config.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailFormInputsService extends AppValidatingInputsService {

	constructor(inputsConfig: UpdateEmailFormInputsConfigService) {
		super(...inputsConfig.data);
	}

}
