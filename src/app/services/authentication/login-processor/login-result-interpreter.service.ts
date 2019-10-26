import { DBUser } from '../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { OperationRequiringEmailPasswordResultService }
	from '../../operation-requiring-email-password-result.service';
import { ResultInterpreter } from '../../../../interfaces/result-interpreter';
import { UserResultProcessorService } from '../../user/user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LoginResultInterpreterService implements ResultInterpreter {


	constructor(
		private __loginResult: OperationRequiringEmailPasswordResultService,
		private __userResultProcessor: UserResultProcessorService
	) {
	}


	async interpret(result: DBUser) {
		await this.__loginResult.ifSuccessful_processResult(
			result,
			(result) => this.__userResultProcessor.process(result)
		);
	}


}
