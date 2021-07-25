import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { isString } from '@writetome51/is-string-not-string';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class SessionIDAppearsValidService implements IDoThis {


	constructor(private __sessionIDInBrowser: SessionIDInBrowserStorageService) {}


	go(): boolean {
		const sessionID = this.__sessionIDInBrowser.get();
		return (isString(sessionID) && sessionID.length > 8);
	}

}
