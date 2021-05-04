import { DeleteUserInputsService } from '../delete-user-inputs.service';
import { DeleteUserService } from './delete-user_service/delete-user.service';
import { Injectable } from '@angular/core';
import { InterpretDeleteUserResultService }
	from './interpret-delete-user-result_service/interpret-delete-user-result.service';
import { ProcessSendFormDataService }
	from '@process/process-send-form-data.abstract.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessDeleteUserService extends ProcessSendFormDataService {

	constructor(
		__validatingInputs: DeleteUserInputsService,
		__getResult: DeleteUserService,
		__interpretResult: InterpretDeleteUserResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
