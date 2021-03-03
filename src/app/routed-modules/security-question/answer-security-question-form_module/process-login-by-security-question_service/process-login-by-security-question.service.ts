import { ProcessSaveFormDataToDbService }
	from '@services/process/process-save-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { LoginBySecurityQuestionService } from './login-by-security-question.service';
import { SecurityAnswerLoginInputService } from '../security-answer-login-input.service';
import { SecurityQuestionServicesModule } from '../../security-question-services.module';
import { InterpretLoginResultService } from '@interpret-result/interpret-login-result.service';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class ProcessLoginBySecurityQuestionService extends ProcessSaveFormDataToDbService {

	constructor(
		__validatingInput: SecurityAnswerLoginInputService,
		__getResult: LoginBySecurityQuestionService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}
