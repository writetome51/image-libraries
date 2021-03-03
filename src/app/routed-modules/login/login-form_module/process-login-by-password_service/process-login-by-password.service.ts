import { ProcessSaveFormDataToDbService }
	from '@services/process/process-save-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { LoginByPasswordService } from './login-by-password.service';
import { LoginFormInputsService } from '../login-form-inputs.service';
import { LoginFormServicesModule } from '../login-form-services.module';
import { InterpretLoginResultService }
	from '@interpret-result/interpret-login-result.service';


@Injectable({providedIn: LoginFormServicesModule})
export class ProcessLoginByPasswordService extends ProcessSaveFormDataToDbService {

	constructor(
		__validatingInputs: LoginFormInputsService,
		__getResult: LoginByPasswordService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
