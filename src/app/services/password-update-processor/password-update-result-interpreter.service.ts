import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { ResultInterpreter } from '../../../interfaces/result-interpreter';
import { UserResultProcessorService } from '../user/user-result-processor.service';
import { OperationRequiringEmailPasswordResultService } from '../data-operation-result/operation-requiring-email-password-result.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateResultInterpreterService implements ResultInterpreter {


	constructor(
		private __userResultProcessor: UserResultProcessorService,
		private __passwordUpdateResult: OperationRequiringEmailPasswordResultService
	) {
	}


	async interpret(result: DBUser) {
		await this.__passwordUpdateResult.ifSuccessful_processResult(
			result,
			(result) => this.__userResultProcessor.process(result)
		);

	}


}
