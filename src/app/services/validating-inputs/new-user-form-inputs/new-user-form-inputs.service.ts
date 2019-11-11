import { Injectable } from '@angular/core';
import { AlertService } from '../../alert.service';
import { AppValidatingInputsService } from '../app-validating-inputs.service';
import { NewUserFormInputsConfigService } from './new-user-form-inputs-config.service';


@Injectable({providedIn: 'root'})

export class NewUserFormInputsService extends AppValidatingInputsService {

	constructor(
		__alert: AlertService,
		inputsConfig: NewUserFormInputsConfigService
	) {
		super(
			__alert,
			...inputsConfig.data
		);
	}

}
