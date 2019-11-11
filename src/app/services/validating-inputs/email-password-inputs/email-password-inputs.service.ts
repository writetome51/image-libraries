import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from '../app-validating-inputs.service';
import { EmailPasswordInputsConfigService } from './email-password-inputs-config.service';


@Injectable({providedIn: 'root'})

export class EmailPasswordInputsService extends AppValidatingInputsService {

	constructor(inputsConfig: EmailPasswordInputsConfigService) {
		super(...inputsConfig.data);
	}

}
