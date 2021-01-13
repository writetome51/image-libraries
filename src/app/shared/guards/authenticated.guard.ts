import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@item-in-browser-storage/session-id-in-browser-storage.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})
export class AuthenticatedGuard implements CanActivate {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __router: Router
	) {
	}


	canActivate(): boolean {
		return this.__ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse();
	}


	private __ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse(): boolean {

		if (hasValue(this.__sessionIDInBrowser.get())) return true;

		this.__router.navigate(['/']);
		return false;
	}

}
