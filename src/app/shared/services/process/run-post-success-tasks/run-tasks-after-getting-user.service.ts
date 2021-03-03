import { DBUser } from '@interfaces/db-user.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { EmailInBrowserStorageService }
	from '@services/browser-storage-related/email-in-browser-storage.service';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage-related/session-id-in-browser-storage.service';


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
