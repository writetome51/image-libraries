import { CanActivate } from '@angular/router';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';


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
