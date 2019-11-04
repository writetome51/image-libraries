import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot }
	from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '../services/authentication/local-session-id.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {


	constructor(
		private __sessionIDLocalStorage: LocalSessionIDService,
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
