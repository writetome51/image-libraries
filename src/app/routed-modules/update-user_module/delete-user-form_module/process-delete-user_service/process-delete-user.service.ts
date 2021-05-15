import { DeleteUserService } from './delete-user_service/delete-user.service';
import { Injectable } from '@angular/core';
import { InterpretDeleteUserResultService }
	from './interpret-delete-user-result_service/interpret-delete-user-result.service';
import { ProcessService } from '@process/process.abstract.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessDeleteUserService extends ProcessService {

	constructor(
		__getResult: DeleteUserService,
		__interpretResult: InterpretDeleteUserResultService
	) {
		super(__getResult, __interpretResult);
	}

}
