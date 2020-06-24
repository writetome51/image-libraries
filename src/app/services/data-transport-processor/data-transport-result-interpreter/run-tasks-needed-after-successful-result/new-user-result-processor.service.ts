import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { LoginResultProcessorService } from './login-result-processor.service';
import { AlertData as alert } from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { DirectProcessor } from '../../../../../interfaces/direct-processor';


@Injectable({providedIn: 'root'})

export class NewUserResultProcessorService implements DirectProcessor {

	constructor(private __loginResultProcessor: LoginResultProcessorService) {
	}


	async process(result: DBUser) {
		await this.__loginResultProcessor.process(result);
		if (result.sessionID) alert.success = 'User created';
	}

}
