import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryComponent } from './library/library.component';


@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<LibraryComponent | ImageComponent> {

	canDeactivate(
		component: LibraryComponent, currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot
	): (Observable<boolean | UrlTree>) | (Promise<boolean | UrlTree>) | boolean | UrlTree {

	}

}
