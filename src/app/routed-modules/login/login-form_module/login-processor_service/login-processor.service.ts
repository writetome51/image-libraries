import { FormDataTransportProcessorService }
	from '@services/processor-related/form-data-transport-processor.abstract.service';
import { Injectable } from '@angular/core';
import { LoginByPasswordService } from './login-by-password.service';
import { LoginFormInputsService } from '../login-form-inputs.service';
import { LoginFormServicesModule } from '../login-form-services.module';
import { InterpretLoginResultService }
	from '@services/processor-related/interpret-login-result.service';


@Injectable({providedIn: LoginFormServicesModule})
export class LoginProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: LoginFormInputsService,
		__getResult: LoginByPasswordService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
