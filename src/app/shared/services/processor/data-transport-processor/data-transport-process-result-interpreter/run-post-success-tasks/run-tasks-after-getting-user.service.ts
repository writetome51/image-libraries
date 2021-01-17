import { DBUser } from '@interfaces/app-user/db-user';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { EmailInBrowserStorageService }
	from '@item-in-browser-storage/email-in-browser-storage.service';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingUserService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {
	}


	go(result: DBUser): void {
		delete result._id; // for security

		this.__sessionIDInBrowser.set(result.sessionID);
		this.__emailInBrowser.set(result.email);

	}

}
