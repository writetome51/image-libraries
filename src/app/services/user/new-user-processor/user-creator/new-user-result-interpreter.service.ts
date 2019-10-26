import { AlertService } from '../../../alert.service';
import { CreateUserResultService } from './create-user-result.service';
import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { ResultInterpreter } from '../../../../../interfaces/result-interpreter';
import { UserResultProcessorService } from '../../user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultInterpreterService implements ResultInterpreter {

	constructor(
		private __alert: AlertService,
		private __createUserResult: CreateUserResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	interpret(result: DBUser) {
		this.__createUserResult.ifSuccessful_processResult(
			result,
			(result) => {
				this.__userResultProcessor.process(result);
				this.__alert.success = 'User created!';
			}
		);
	}


}
