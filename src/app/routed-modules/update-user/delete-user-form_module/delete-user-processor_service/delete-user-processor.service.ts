import { DeleteUserService } from './delete-user.service';
import { DeleteUserInputsService } from '../delete-user-inputs.service';
import { InterpretDeleteUserResultService }
	from './interpret-delete-user-result_service/interpret-delete-user-result.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.abstract.service';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: DeleteUserInputsService,
		__getResult: DeleteUserService,
		__interpretResult: InterpretDeleteUserResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
