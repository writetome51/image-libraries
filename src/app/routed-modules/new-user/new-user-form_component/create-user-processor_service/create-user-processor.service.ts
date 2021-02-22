import { CreateUserService } from './create-user.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.abstract.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs.service';
import { InterpretCreateUserResultService }
	from './create-user-result-interpreter_service/interpret-create-user-result.service';
import { NewUserServicesModule } from '@app/routed-modules/new-user/new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class CreateUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: NewUserInputsService,
		__getResult: CreateUserService,
		__interpretResult: InterpretCreateUserResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
