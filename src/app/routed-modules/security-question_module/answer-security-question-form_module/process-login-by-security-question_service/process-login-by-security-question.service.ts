import { Injectable } from '@angular/core';
import { LoginBySecurityQuestionService } from './login-by-security-question.service';
import { SecurityAnswerLoginInputService } from '../security-answer-login-input.service';
import { SecurityQuestionServicesModule } from '../../security-question-services.module';
import { InterpretLoginResultService } from '@interpret-result/interpret-login-result.service';
import { ProcessService } from '@process/process.abstract.service';
import { SendFormData } from '@interfaces/send-form-data.interface';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class ProcessLoginBySecurityQuestionService extends ProcessService implements SendFormData {

	constructor(
		public $_validatingInputs: SecurityAnswerLoginInputService,
		__getResult: LoginBySecurityQuestionService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__getResult, __interpretResult);
	}

}
