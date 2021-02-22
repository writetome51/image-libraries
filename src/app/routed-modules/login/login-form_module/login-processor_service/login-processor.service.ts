import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.abstract.service';
import { Injectable } from '@angular/core';
import { LoginByPasswordService } from './login-by-password.service';
import { LoginFormInputsService } from '../login-form-inputs.service';
import { InterpretLoginResultService }
	from '@data-transport-processor/../../../../shared/services/processor/interpret-result/interpret-data-transport-result/interpret-login-result.service';
import { LoginFormServicesModule } from '../login-form-services.module';


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
