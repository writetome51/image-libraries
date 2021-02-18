import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginByPasswordService } from './login-by-password.service';
import { LoginFormInputsService } from '../login-form-inputs.service';
import { InterpretLoginResultService }
	from '@data-transport-processor/interpret-data-transport-result/interpret-login-result.service';
import { LoginServicesModule } from '@app/routed-modules/login/login-services.module';


@Injectable({providedIn: LoginServicesModule})
export class LoginProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: LoginFormInputsService,
		__getResult: LoginByPasswordService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
