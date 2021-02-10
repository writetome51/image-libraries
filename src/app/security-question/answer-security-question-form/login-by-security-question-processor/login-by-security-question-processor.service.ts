import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService }
	from '@data-transport-process-result-interpreter/login-result-interpreter.service';
import { LoginBySecurityQuestionService } from './login-by-security-question.service';
import { SecurityAnswerLoginInputService } from '../security-answer-login-input.service';


@Injectable({providedIn: 'root'})
export class LoginBySecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: SecurityAnswerLoginInputService,
		__getResult: LoginBySecurityQuestionService,
		__resultInterpreter: LoginResultInterpreterService
	) {
		super(__validatingInput, __getResult, __resultInterpreter);
	}

}
