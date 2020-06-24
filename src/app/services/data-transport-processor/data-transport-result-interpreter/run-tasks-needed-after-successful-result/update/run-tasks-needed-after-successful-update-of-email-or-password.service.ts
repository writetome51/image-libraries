import { DBUser } from '../../../../../../interfaces/db-user';
import { UserResultProcessorService } from '../user-result-processor.service';
import { AlertData as alert }
	from '../../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { IDoThis } from '../../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulUpdateOfEmailOrPasswordService implements IDoThis {

	resultMessage: string;


	constructor(private __userResultProcessor: UserResultProcessorService) {
	}


	async go(result: DBUser) {
		this.__userResultProcessor.process(result);
		if (!(this.resultMessage)) throw new Error(`The "resultMessage" property is not set.`);
		alert.success = this.resultMessage;
	}

}
