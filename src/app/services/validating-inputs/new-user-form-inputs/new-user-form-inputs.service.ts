import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from '../app-validating-inputs.service';
import { NewUserFormInputsConfigService } from './new-user-form-inputs-config.service';


@Injectable({providedIn: 'root'})

export class NewUserFormInputsService extends AppValidatingInputsService {

	constructor(inputsConfig: NewUserFormInputsConfigService) {
		super(...inputsConfig.data);
	}

}
