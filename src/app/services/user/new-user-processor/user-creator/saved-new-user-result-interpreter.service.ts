import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { MessageService } from '../../../message.service';
import { UserResultProcessorService } from '../../user-result-processor.service';
import { CreateUserApiRequestResultService } from './create-user-api-request-result.service';


@Injectable({
	providedIn: 'root'
})
export class SavedNewUserResultInterpreterService {

	constructor(
		private __successOrErrorMessage: MessageService,
		private __createUserApiRequestResult: CreateUserApiRequestResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	interpret(result: DBUser) {
		this.__createUserApiRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => {
				this.__userResultProcessor.process(result);
				this.__successOrErrorMessage.success = 'User created!';
			}
		);
	}


}
