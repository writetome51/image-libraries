import { DBUser } from '@interfaces/db-user';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LocalEmailService } from '@services/local-data/local-email.service';
import { LocalSessionIDService } from '@services/local-data/local-session-id.service';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterGettingUserService implements IDoThis {

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
