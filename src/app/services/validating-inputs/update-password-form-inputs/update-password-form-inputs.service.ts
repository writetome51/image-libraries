import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from '../app-validating-inputs.service';
import { UpdatePasswordFormInputsConfigService } from './update-password-form-inputs-config.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordFormInputsService extends AppValidatingInputsService {

	constructor(inputsConfig: UpdatePasswordFormInputsConfigService) {
		super(...inputsConfig.data);
	}

}
