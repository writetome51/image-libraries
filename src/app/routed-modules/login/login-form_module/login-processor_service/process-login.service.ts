import { ProcessFormDataTransportService }
	from '@services/process-related/process-form-data-transport.abstract.service';
import { Injectable } from '@angular/core';
import { LoginByPasswordService } from './login-by-password.service';
import { LoginFormInputsService } from '../login-form-inputs.service';
import { LoginFormServicesModule } from '../login-form-services.module';
import { InterpretLoginResultService }
	from '@services/process-related/interpret-login-result.service';


@Injectable({providedIn: LoginFormServicesModule})
export class ProcessLoginService extends ProcessFormDataTransportService {

	constructor(
		__validatingInputs: LoginFormInputsService,
		__getResult: LoginByPasswordService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
