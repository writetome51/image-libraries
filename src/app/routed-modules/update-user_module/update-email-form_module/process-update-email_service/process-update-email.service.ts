import { Injectable } from '@angular/core';
import { UpdateEmailInputsService }
	from '../update-email-inputs_service/update-email-inputs.service';
import { InterpretUpdateEmailResultService }
	from './interpret-update-email-result_service/interpret-update-email-result.service';
import { UpdateEmailService } from './update-email.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { ProcessService } from '@process/process.abstract.service';
import { SendFormData } from '@interfaces/send-form-data.interface';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessUpdateEmailService extends ProcessService implements SendFormData {

	constructor(
		public $_validatingInputs: UpdateEmailInputsService,
		__getResult: UpdateEmailService,
		__interpretResult: InterpretUpdateEmailResultService
	) {
		super(__getResult, __interpretResult);
	}

}
