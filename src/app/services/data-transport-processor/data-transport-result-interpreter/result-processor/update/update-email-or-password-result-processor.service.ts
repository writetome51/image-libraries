import { DBUser } from '../../../../../../interfaces/db-user';
import { UserResultProcessorService } from '../user-result-processor.service';
import { AlertData as alert } from '../../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../../../interfaces/direct-processor';


@Injectable({providedIn: 'root'})

export class UpdateEmailOrPasswordResultProcessorService implements DirectProcessor {

	resultMessage: string;


	constructor(private __userResultProcessor: UserResultProcessorService) {
	}


	async process(result: DBUser) {
		this.__userResultProcessor.process(result);
		if (!(this.resultMessage)) throw new Error(`The "resultMessage" property is not set.`);
		alert.success = this.resultMessage;
	}

}
