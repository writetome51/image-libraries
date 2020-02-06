import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../services/local-data/local-session-id.service';


@Injectable({providedIn: 'root'})

export class AuthenticatedGuard implements CanActivate {


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __router: Router
	) {
	}


	canActivate(): boolean {
		return this.__ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse();
	}


	private __ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse(): boolean {

		if (this.__localSessionID.get()) return true;

		this.__router.navigate(['/']);
		return false;
	}


}
