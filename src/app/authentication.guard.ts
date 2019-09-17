import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree }
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
		private __userStorage: UserStorageService,
		private __router: Router
	) {
	}


	canActivate(
		next: ActivatedRouteSnapshot, state: RouterStateSnapshot
	): Promise<boolean | UrlTree> {

		return this.__canActivate();
	}


	private async __canActivate(){

		if (!(this.__sessionIDLocalStorage.get())) return this.__redirectToLogin_and_ReturnFalse();

		let result = await this.__userStorage.get();
		if (typeof result === 'string') result = getObjectFromJSON(result);

		// @ts-ignore
		if (hasValue(result.sessionID)) return true;
		else return this.__redirectToLogin_and_ReturnFalse();
	}


	private __redirectToLogin_and_ReturnFalse() {
		this.__router.navigate(['']);
		return false;
	}


}
