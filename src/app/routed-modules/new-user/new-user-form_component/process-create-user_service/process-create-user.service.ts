import { CreateUserService } from './create-user.service';
import { ProcessSaveFormDataToDbService }
	from '@services/process/process-save-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs.service';
import { InterpretCreateUserResultService }
	from './interpret-create-user-result_service/interpret-create-user-result.service';
import { NewUserServicesModule } from '../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class ProcessCreateUserService extends ProcessSaveFormDataToDbService {

	constructor(
		__validatingInputs: NewUserInputsService,
		__getResult: CreateUserService,
		__interpretResult: InterpretCreateUserResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
