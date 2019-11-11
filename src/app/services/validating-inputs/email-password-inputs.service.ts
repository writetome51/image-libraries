import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from '../alert.service';
import { EmailPasswordInputsConfigService } from './email-password-inputs-config.service';


@Injectable({
	providedIn: 'root'
})
export class EmailPasswordInputsService extends AppValidatingInputsService {

	constructor(
		__alert: AlertService,
		inputsConfig: EmailPasswordInputsConfigService
	) {
		super(
			__alert,
			...inputsConfig.data
		);
	}

}
