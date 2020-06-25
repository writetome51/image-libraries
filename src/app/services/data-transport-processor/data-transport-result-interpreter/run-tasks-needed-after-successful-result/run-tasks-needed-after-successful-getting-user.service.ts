import { DBUser } from '../../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../../../local-data/local-session-id.service';
import { LocalEmailService } from '../../../local-data/local-email.service';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulGettingUserService implements IDoThis {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __localEmail: LocalEmailService
	) {
	}


	go(result: DBUser): void {
		delete result._id; // for security

		this.__localSessionID.set(result.sessionID);
		this.__localEmail.set(result.email);

	}

}
