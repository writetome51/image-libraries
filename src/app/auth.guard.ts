import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private __router: Router) {
	}


	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | boolean {
		return this._auth.user
			.take(1)
			.map(user => !!user)
			.do(loggedIn => {
				if (!loggedIn) {
					this.__router.navigate(['/']);
				}
			});
	}
}
