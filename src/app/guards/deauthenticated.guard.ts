import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionIDLocalStorageService }
	from '../services/authentication/session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class DeauthenticatedGuard implements CanActivate {


	constructor(private __sessionIDLocalStorage: SessionIDLocalStorageService){
	}


	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

		return (!(this.__sessionIDLocalStorage.get()));
	}

}
