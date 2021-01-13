import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})
export class DeAuthenticatedGuard implements CanActivate {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	// Returns true if logged out.

	canActivate(): boolean {
		if (hasValue(this.__sessionIDInBrowser.get())) {
			this.__redirectToLoggedInHome.go();
			return false;
		}
		else return true;
	}

}
