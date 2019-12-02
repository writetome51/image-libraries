import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalSessionIDService } from '../services/local-data/local-session-id.service';
import { AppModuleRouteService as moduleRoute } from '../app-module-route.service';


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
			this.__router.navigate([`/${moduleRoute.LibrariesComponent}`]); // logged-in homepage.
			return false;
		}
		else return true;
	}

}
