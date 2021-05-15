import { Injectable } from '@angular/core';
import { InterpretGetSecurityQuestionResultService }
	from './interpret-get-security-question-result_service/interpret-get-security-question-result.service';
import { EmailToGetSecurityQuestionInputService }
	from '../email-to-get-security-question-input.service';
import { GetSecurityQuestionService } from './get-security-question.service';
import { SecurityQuestionServicesModule } from '../../security-question-services.module';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class ProcessGetSecurityQuestionService extends ProcessService {

	constructor(
		public $_validatingInputs: EmailToGetSecurityQuestionInputService,
		__getResult: GetSecurityQuestionService,
		__interpretResult: InterpretGetSecurityQuestionResultService
	) {
		super(__getResult, __interpretResult);
	}

}
