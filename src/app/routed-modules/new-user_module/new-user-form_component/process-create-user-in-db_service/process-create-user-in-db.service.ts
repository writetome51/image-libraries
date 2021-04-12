import { CreateUserInDbService } from './create-user-in-db.service';
import { ProcessSendFormDataToDbService }
	from '@process/process-send-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs_service/new-user-inputs.service';
import { InterpretCreateUserInDbResultService }
	from './interpret-create-user-in-db-result_service/interpret-create-user-in-db-result.service';
import { NewUserServicesModule } from '../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class ProcessCreateUserInDbService extends ProcessSendFormDataToDbService {

	constructor(
		__validatingInputs: NewUserInputsService,
		__getResult: CreateUserInDbService,
		__interpretResult: InterpretCreateUserInDbResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
