import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { AlertService } from '../../../alert.service';
import { UserResultProcessorService } from '../../user-result-processor.service';
import { CreateUserApiRequestResultService } from './create-user-api-request-result.service';


@Injectable({
	providedIn: 'root'
})
export class SavedNewUserResultInterpreterService {

	constructor(
		private __alert: AlertService,
		private __createUserApiRequestResult: CreateUserApiRequestResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	interpret(result: DBUser) {
		this.__createUserApiRequestResult.ifSuccessful_processResult(
			result,
			(result) => {
				this.__userResultProcessor.process(result);
				this.__alert.success = 'User created!';
			}
		);
	}


}
