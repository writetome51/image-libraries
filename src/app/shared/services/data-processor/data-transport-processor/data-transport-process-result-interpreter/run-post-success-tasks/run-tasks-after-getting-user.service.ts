import { DBUser } from '@interfaces/db-user';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LocalEmailService }
	from '@services/item-in-browser-storage/local-email.service';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/local-session-id.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingUserService implements IDoThis {

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
