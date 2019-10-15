import { DBUser } from '../../../interfaces/db-user';
import { HttpRequestResultService } from '../http-request-result.service';
import { Injectable } from '@angular/core';
import { SuccessOrErrorMessageService }
	from '../../success-or-error-message/success-or-error-message.service';
import { UserResultProcessorService } from './user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class SavedNewUserResultInterpreterService {

	constructor(
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __httpRequestResult: HttpRequestResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	interpret(result: DBUser) {
		this.__httpRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => {
				this.__userResultProcessor.process(result);
				this.__successOrErrorMessage.success = 'User created!';
			}
		);
	}


}
