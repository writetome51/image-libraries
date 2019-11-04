import { DBUser } from '../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { LoginResultProcessorService } from './login-result-processor.service';
import { AlertService } from '../alert.service';
import { ResultProcessor } from '../../../interfaces/result-processor';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultProcessorService implements ResultProcessor {

	constructor(
		private __loginResultProcessor: LoginResultProcessorService,
		private __alert: AlertService
	) {
	}


	process(result: DBUser): void {
		this.__loginResultProcessor.process(result);
		if (result.sessionID) this.__alert.success = 'User created!';
	}

}
