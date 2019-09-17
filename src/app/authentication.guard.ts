import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree }
	from '@angular/router';
import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { Observable } from 'rxjs';
import { SessionIDLocalStorageService } from './services/authentication/session-id-local-storage.service';
import { UserStorageService } from './services/user/user-storage.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {


	constructor(
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __userStorage: UserStorageService
	) {
	}


	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): (Observable<boolean | UrlTree>) | (Promise<boolean | UrlTree>) | boolean | UrlTree {

		if (!(this.__sessionIDLocalStorage.get())) return false;

		let result = this.__userStorage.get();
		if (typeof result === 'string') result = getObjectFromJSON(result);

		// @ts-ignore
		return hasValue(result.sessionID);
	}


}
