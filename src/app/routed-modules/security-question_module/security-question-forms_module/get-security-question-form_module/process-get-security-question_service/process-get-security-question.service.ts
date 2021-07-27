import { Injectable } from '@angular/core';
import { InterpretGetSecurityQuestionResultService }
	from './interpret-get-security-question-result_service/interpret-get-security-question-result.service';
import { GetSecurityQuestionService } from './get-security-question.service';
import { SecurityQuestionServicesModule } from '../../../security-question-services.module';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class ProcessGetSecurityQuestionService extends ProcessService {

	constructor(
		__getResult: GetSecurityQuestionService,
		__interpretResult: InterpretGetSecurityQuestionResultService
	) {
		super(__getResult, __interpretResult);
	}

}
