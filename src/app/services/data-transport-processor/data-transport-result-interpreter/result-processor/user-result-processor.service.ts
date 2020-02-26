import { DBUser } from '../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../../../local-data/local-session-id.service';
import { AlertService as alert } from '../../../alert.service';
import { LocalEmailService } from '../../../local-data/local-email.service';
import { DirectProcessor } from '../../../../interfaces/direct-processor';


@Injectable({
	providedIn: 'root'
})
export class UserResultProcessorService implements DirectProcessor {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __localEmail: LocalEmailService
	) {
	}


	process(result: DBUser): void {
		delete result._id; // for security

		this.__localSessionID.set(result.sessionID);
		this.__localEmail.set(result.email);

	}

}
