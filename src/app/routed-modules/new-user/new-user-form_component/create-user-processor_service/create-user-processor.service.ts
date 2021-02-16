import { CreateUserService } from './create-user.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs.service';
import { CreateUserResultInterpreterService }
	from './create-user-result-interpreter_service/create-user-result-interpreter.service';
import { NewUserServicesModule } from '@app/routed-modules/new-user/new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class CreateUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: NewUserInputsService,
		__getResult: CreateUserService,
		__resultInterpreter: CreateUserResultInterpreterService
	) {
		super(__validatingInputs, __getResult, __resultInterpreter);
	}

}
