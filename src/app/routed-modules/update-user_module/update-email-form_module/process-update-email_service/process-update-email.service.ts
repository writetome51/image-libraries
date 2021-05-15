import { Injectable } from '@angular/core';
import { InterpretUpdateEmailResultService }
	from './interpret-update-email-result_service/interpret-update-email-result.service';
import { UpdateEmailService } from './update-email.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessUpdateEmailService extends ProcessService {

	constructor(
		__getResult: UpdateEmailService,
		__interpretResult: InterpretUpdateEmailResultService
	) {
		super(__getResult, __interpretResult);
	}

}
