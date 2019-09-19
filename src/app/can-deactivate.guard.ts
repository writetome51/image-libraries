import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree }
	from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryComponent } from './library/library.component';
import { FullSizeImageComponent } from './image-viewer/full-size-image/full-size-image.component';


@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<LibraryComponent | FullSizeImageComponent> {


	// This guard is for keeping a user from navigating away from a route when they have unsaved
	// changes pending.  They must be asked if they want to save or discard changes first.


	constructor(
		private __router: Router
	) {
	}


	canDeactivate(
		component: LibraryComponent, currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot
	): (Observable<boolean | UrlTree>) | (Promise<boolean | UrlTree>) | boolean | UrlTree {

	}

}
