import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot }
	from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService }
	from '../services/authentication/session-id-local-storage.service';
import { UserStorageService } from '../services/user/user-storage.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {


	constructor(
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __userStorage: UserStorageService,
		private __router: Router
	) {
	}


	canActivate(
		next: ActivatedRouteSnapshot, state: RouterStateSnapshot
	): boolean {

		return this.__ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse();
	}


	private __ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse(): boolean {

		if (this.__sessionIDLocalStorage.get()) return true;

		this.__router.navigate(['/']);
		return false;
	}


}
