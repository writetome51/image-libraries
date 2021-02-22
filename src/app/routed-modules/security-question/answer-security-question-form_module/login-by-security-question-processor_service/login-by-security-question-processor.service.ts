import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.abstract.service';
import { Injectable } from '@angular/core';
import { InterpretLoginResultService }
	from '@data-transport-processor/../../../../shared/services/processor/interpret-result/interpret-data-transport-result/interpret-login-result.service';
import { LoginBySecurityQuestionService } from './login-by-security-question.service';
import { SecurityAnswerLoginInputService } from '../security-answer-login-input.service';
import { SecurityQuestionServicesModule } from '../../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class LoginBySecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: SecurityAnswerLoginInputService,
		__getResult: LoginBySecurityQuestionService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}
