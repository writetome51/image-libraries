import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from '../app-validating-inputs.service';
import { AlertService } from '../../alert.service';
import { UpdatePasswordFormInputsConfigService } from './update-password-form-inputs-config.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordFormInputsService extends AppValidatingInputsService {

	constructor(
		__alert: AlertService,
		inputsConfig: UpdatePasswordFormInputsConfigService
	) {
		super(__alert, ...inputsConfig.data);
	}

}
