import { DBUser } from '../../../../../interfaces/db-user';
import { RestAPIRequestResultService } from '../../../rest-api-request-result.service';
import { Injectable } from '@angular/core';
import { SuccessOrErrorMessageService }
	from '../../../success-or-error-message.service';
import { UserResultProcessorService } from '../../user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class SavedNewUserResultInterpreterService {

	constructor(
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __restApiRequestResult: RestAPIRequestResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	interpret(result: DBUser) {
		this.__restApiRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => {
				this.__userResultProcessor.process(result);
				this.__successOrErrorMessage.success = 'User created!';
			}
		);
	}


}
