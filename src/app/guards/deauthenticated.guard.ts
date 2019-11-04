import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalSessionIDService }
	from '../services/authentication/local-session-id.service';


@Injectable({
	providedIn: 'root'
})
export class DeauthenticatedGuard implements CanActivate {


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __router: Router
	) {
	}


	// Returns true if logged out.

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.__localSessionID.get()) {
			this.__router.navigate(['/libraries']); // Goes to logged-in homepage.
			return false;
		}
		return true;
	}

}
