import { DeleteUserService } from './delete-user.service';
import { DeleteUserInputsService } from '../delete-user-inputs.service';
import { DeleteUserResultInterpreterService }
	from './delete-user-result-interpreter/delete-user-result-interpreter.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: DeleteUserInputsService,
		__getResult: DeleteUserService,
		__resultInterpreter: DeleteUserResultInterpreterService
	) {
		super(__validatingInputs, __getResult, __resultInterpreter);
	}

}
