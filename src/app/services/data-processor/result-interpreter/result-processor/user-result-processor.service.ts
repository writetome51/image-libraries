import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../../../local-data/local-session-id.service';
import { ResultProcessor } from '../../../../../interfaces/result-processor';
import { AlertService as alert } from '../../../alert.service';
import { LocalEmailService } from '../../../local-data/local-email.service';


@Injectable({
	providedIn: 'root'
})
export class UserResultProcessorService implements ResultProcessor {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __localEmail: LocalEmailService
	) {
	}


	process(result: DBUser): void {
		if (result.sessionID) {
			this.__localSessionID.set(result.sessionID);
			this.__localEmail.set(result.email);
		}
		else alert.error = 'An unexpected error occurred.';
	}

}
