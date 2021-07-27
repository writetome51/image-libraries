import { Injectable } from '@angular/core';
import { LoginBySecurityQuestionService } from './login-by-security-question.service';
import { SecurityQuestionServicesModule } from '../../../security-question-services.module';
import { InterpretLoginResultService } from '@interpret-result/interpret-login-result.service';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class ProcessLoginBySecurityQuestionService extends ProcessService {

	constructor(
		__getResult: LoginBySecurityQuestionService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__getResult, __interpretResult);
	}

}
