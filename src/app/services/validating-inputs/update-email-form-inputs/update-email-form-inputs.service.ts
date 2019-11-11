import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from '../app-validating-inputs.service';
import { AlertService } from '../../alert.service';
import { UpdateEmailFormInputsConfigService } from './update-email-form-inputs-config.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailFormInputsService extends AppValidatingInputsService {

	constructor(
		__alert: AlertService,
		inputsConfig: UpdateEmailFormInputsConfigService
	) {
		super(
			__alert,
			...inputsConfig.data
		);
	}

}
