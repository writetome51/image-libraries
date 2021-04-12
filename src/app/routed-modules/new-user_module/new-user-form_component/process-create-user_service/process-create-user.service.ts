import { ProcessSendFormDataToDbService }
	from '@process/process-send-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs_service/new-user-inputs.service';
import { InterpretCreateUserInDbResultService }
	from './process-create-user-in-db_service/interpret-create-user-in-db-result_service/interpret-create-user-in-db-result.service';
import { NewUserServicesModule } from '../../new-user-services.module';
import { CreateUserService } from '@app/routed-modules/new-user_module/new-user-form_component/process-create-user_service/create-user.service';


@Injectable({providedIn: NewUserServicesModule})
export class ProcessCreateUserService extends ProcessSendFormDataToDbService {

	constructor(
		__validatingInputs: NewUserInputsService,
		__getResult: CreateUserService,
		__interpretResult: InterpretCreateUserInDbResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
