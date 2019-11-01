import { AlertService } from '../../alert.service';
import { NewUserResultService } from './new-user-result.service';
import { DBUser } from '../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { ResultInterpreter } from '../../../../interfaces/result-interpreter';
import { UserResultProcessorService } from '../user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultInterpreterService implements ResultInterpreter {

	constructor(
		private __alert: AlertService,
		private __newUserResult: NewUserResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	interpret(result: DBUser) {
		this.__newUserResult.ifSuccessful_processResult(
			result,
			(result) => {
				this.__userResultProcessor.process(result);
				this.__alert.success = 'User created!';
			}
		);
	}


}
