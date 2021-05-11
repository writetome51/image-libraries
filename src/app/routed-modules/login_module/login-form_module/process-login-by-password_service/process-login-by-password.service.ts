import { Injectable } from '@angular/core';
import { InterpretLoginResultService } from '@interpret-result/interpret-login-result.service';
import { LoginByPasswordService } from './login-by-password.service';
import { LoginFormInputsService } from '../login-form-inputs.service';
import { LoginFormServicesModule } from '../login-form-services.module';
import { ProcessService } from '@process/process.abstract.service';
import { SendFormData } from '@interfaces/send-form-data.interface';


@Injectable({providedIn: LoginFormServicesModule})
export class ProcessLoginByPasswordService extends ProcessService implements SendFormData {

	constructor(
		public $_validatingInputs: LoginFormInputsService,
		__getResult: LoginByPasswordService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__getResult, __interpretResult);
	}

}
