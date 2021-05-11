import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs_service/new-user-inputs.service';
import { NewUserServicesModule } from '../../new-user-services.module';
import { InterpretCreateUserResultService }
	from './interpret-create-user-result_service/interpret-create-user-result.service';
import { CreateUserService } from './create-user.service';
import { ProcessService } from '@process/process.abstract.service';
import { SendFormData } from '@interfaces/send-form-data.interface';


@Injectable({providedIn: NewUserServicesModule})
export class ProcessCreateUserService extends ProcessService implements SendFormData {

	constructor(
		public $_validatingInputs: NewUserInputsService,
		__getResult: CreateUserService,
		__interpretResult: InterpretCreateUserResultService
	) {
		super(__getResult, __interpretResult);
	}

}
