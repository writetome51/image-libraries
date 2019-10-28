import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot }
	from '@angular/router';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { FullSizeImageComponent }
	from '../library/image-viewer/full-size-image/full-size-image.component';
import { Injectable } from '@angular/core';
import { LibraryComponent } from '../library/library.component';
import { AlertService } from '../services/alert.service';


@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<LibraryComponent | FullSizeImageComponent> {


	// This guard is for keeping a user from navigating away from a route when they have unsaved
	// changes pending.


	constructor(
		private __currentLibrary: CurrentLibraryService,
		private __alert: AlertService
	) {
	}


	canDeactivate(
	//	component: LibraryComponent | FullSizeImageComponent,
	//	currentRoute: ActivatedRouteSnapshot,
	//	currentState: RouterStateSnapshot,
	//	nextState?: RouterStateSnapshot
	): boolean {

		if (Object.keys(this.__currentLibrary.changes).length) {
			this.__alert.error =
				'You have unsaved changes to the library.  Please save or discard them first.';
			return false;
		}
		else return true;
	}

}
