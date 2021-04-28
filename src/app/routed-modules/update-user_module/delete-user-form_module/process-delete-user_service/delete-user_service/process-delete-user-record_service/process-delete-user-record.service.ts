import { DeleteUserRecordService } from './delete-user-record.service';
import { Injectable } from '@angular/core';
import { InterpretDeleteUserRecordResultService }
	from './interpret-delete-user-record-result_service/interpret-delete-user-record-result.service';
import { ProcessExistingUserDBOperationService }
	from '@process/process-existing-user-db-operation.abstract.service';
import { UpdateUserServicesModule } from '../../../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessDeleteUserRecordService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: DeleteUserRecordService,
		__interpretResult: InterpretDeleteUserRecordResultService
	) {
		super(__getResult, __interpretResult);
	}

}
