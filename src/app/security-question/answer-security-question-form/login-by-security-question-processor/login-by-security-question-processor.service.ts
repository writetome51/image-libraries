import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService }
	from '@data-transport-process-result-interpreter/login-result-interpreter.service';
import { SecurityAnswerLoginInputService } from '../security-answer-login-input.service';
import { LoginBySecurityQuestionService } from './login-by-security-question.service';


@Injectable({providedIn: 'root'})
export class LoginBySecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		__securityAnswerLoginInput: SecurityAnswerLoginInputService,
		__getResult: LoginBySecurityQuestionService,
		__resultInterpreter: LoginResultInterpreterService
	) {
		super(__securityAnswerLoginInput, __getResult, __resultInterpreter);
	}

}
