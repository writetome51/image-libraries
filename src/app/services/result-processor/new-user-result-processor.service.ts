import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { LoginResultProcessorService } from './login-result-processor.service';
import { AlertService as alert } from '../alert.service';
import { ResultProcessor } from '../../../interfaces/result-processor';


@Injectable({providedIn: 'root'})

export class NewUserResultProcessorService implements ResultProcessor {

	constructor(private __loginResultProcessor: LoginResultProcessorService) {
	}


	async process(result: DBUser) {
		await this.__loginResultProcessor.process(result);
		if (result.sessionID) alert.success = 'User created!';
	}

}
