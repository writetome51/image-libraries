import { Injectable } from '@angular/core';
import { DBUser } from '../../../interfaces/db-user';
import { UserResultProcessorService } from '../user/user-result-processor.service';
import { OperationRequiringEmailPasswordResultService }
	from '../data-operation-result/operation-requiring-email-password-result.service';
import { ResultInterpreter } from '../../../interfaces/result-interpreter';


@Injectable({
	providedIn: 'root'
})
export class EmailUpdateResultInterpreterService implements ResultInterpreter {


	constructor(
		private __userResultProcessor: UserResultProcessorService,
		private __emailUpdateResult: OperationRequiringEmailPasswordResultService
	) {
	}


	async interpret(result: DBUser) {
		await this.__emailUpdateResult.ifSuccessful_processResult(
			result,
			(result) => this.__userResultProcessor.process(result)
		);
	}


}
