import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalSessionIDService } from '../services/local-data/local-session-id.service';


@Injectable({
	providedIn: 'root'
})
export class DeAuthenticatedGuard implements CanActivate {


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __router: Router
	) {
	}


	// Returns true if logged out.

	canActivate(): boolean {
		if (this.__localSessionID.get()) {
			this.__router.navigate(['/libraries']); // Goes to logged-in homepage.
			return false;
		}
		else return true;
	}

}
