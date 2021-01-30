import { CanActivate, Router } from '@angular/router';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/session-id-in-browser-storage.service';


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
