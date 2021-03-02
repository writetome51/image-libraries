import { ProcessFormDataTransportService }
	from '@services/process-related/process-form-data-transport.abstract.service';
import { Injectable } from '@angular/core';
import { UpdateEmailInputsService } from '../update-email-inputs_service/update-email-inputs.service';
import { InterpretUpdateEmailResultService } from './interpret-update-email-result_service/interpret-update-email-result.service';
import { UpdateEmailService } from './update-email.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessUpdateEmailService extends ProcessFormDataTransportService {

	constructor(
		__validatingInputs: UpdateEmailInputsService,
		__getResult: UpdateEmailService,
		__interpretResult: InterpretUpdateEmailResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
