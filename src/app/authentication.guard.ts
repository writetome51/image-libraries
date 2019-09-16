import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router }
	from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {


	constructor(private __router: Router) {
	}


	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): (Observable<boolean | UrlTree>) | (Promise<boolean | UrlTree>) | boolean | UrlTree {
		return true;
	}


}
