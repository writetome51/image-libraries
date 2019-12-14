import { DBUser } from '../../../../interfaces/db-user';
import { ResultProcessor } from '../../../../interfaces/result-processor';
import { UserResultProcessorService } from './user-result-processor.service';
import { AlertService as alert } from '../../../alert.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class UpdateEmailOrPasswordResultProcessorService implements ResultProcessor {

	resultMessage: string;


	constructor(private __userResultProcessor: UserResultProcessorService) {
	}


	async process(result: DBUser) {
		this.__userResultProcessor.process(result);
		if (!(this.resultMessage)) throw new Error(`The "resultMessage" property is not set.`);
		if (result.sessionID) alert.success = this.resultMessage;
	}

}
