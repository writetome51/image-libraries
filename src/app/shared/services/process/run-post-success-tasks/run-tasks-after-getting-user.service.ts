import { UserRecord } from '@interfaces/user-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { EmailInBrowserStorageService }
	from '@services/browser-storage/email-in-browser-storage.service';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingUserService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {}


	go(result: UserRecord): void {
		// for security:
		delete result._id;
		delete result.password;
		delete result.securityQuestion;

		this.__sessionIDInBrowser.set(result.sessionID);
		this.__emailInBrowser.set(result.email);
	}

}
