import { AuthenticatorService } from '../../../../services/authentication/authenticator.service';
import { FormDataTransportProcessorService }
	from '../../../../services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetSecurityQuestionInputsService } from '../../get-security-question-inputs.service';
import { GetSecurityQuestionResultInterpreterService }
	from './get-security-question-result-interpreter.service';
import { SecurityQuestion } from '../../../../../interfaces/security-question';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__getSecurityQuestionInputs: GetSecurityQuestionInputsService,
		__getSecurityQuestionResultInterpreter: GetSecurityQuestionResultInterpreterService
	) {
		super(__getSecurityQuestionInputs, __getSecurityQuestionResultInterpreter);
	}


	protected async _getResult(): Promise<SecurityQuestion | {error: {message: string}}> {
		return await this.__authenticator.getSecurityQuestion();
	}

}
