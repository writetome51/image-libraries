import { Injectable } from '@angular/core';
import { InterpretUpdatePasswordResultService }
	from './interpret-update-password-result_service/interpret-update-password-result.service';
import { ProcessService } from '@process/process.abstract.service';
import { SendFormData } from '@interfaces/send-form-data.interface';
import { UpdatePasswordInputsService }
	from '../update-password-inputs_service/update-password-inputs.service';
import { UpdatePasswordService } from './update-password.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessUpdatePasswordService extends ProcessService implements SendFormData {

	constructor(
		public $_validatingInputs: UpdatePasswordInputsService,
		__getResult: UpdatePasswordService,
		__interpretResult: InterpretUpdatePasswordResultService
	) {
		super(__getResult, __interpretResult);
	}

}
