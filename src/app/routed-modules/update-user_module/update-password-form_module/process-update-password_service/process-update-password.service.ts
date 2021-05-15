import { Injectable } from '@angular/core';
import { InterpretUpdatePasswordResultService }
	from './interpret-update-password-result_service/interpret-update-password-result.service';
import { ProcessService } from '@process/process.abstract.service';
import { UpdatePasswordService } from './update-password.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessUpdatePasswordService extends ProcessService {

	constructor(
		__getResult: UpdatePasswordService,
		__interpretResult: InterpretUpdatePasswordResultService
	) {
		super(__getResult, __interpretResult);
	}

}
