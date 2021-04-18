import { ProcessSendFormDataService }
	from '@process/process-send-form-data.abstract.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs_service/new-user-inputs.service';
import { NewUserServicesModule } from '../../new-user-services.module';
import { CreateUserService } from './create-user.service';
import { InterpretCreateUserResultService }
	from './interpret-create-user-result_service/interpret-create-user-result.service';


@Injectable({providedIn: NewUserServicesModule})
export class ProcessCreateUserService extends ProcessSendFormDataService {

	constructor(
		__validatingInputs: NewUserInputsService,
		__getResult: CreateUserService,
		__interpretResult: InterpretCreateUserResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
