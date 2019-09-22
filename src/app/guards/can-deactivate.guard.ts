import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot }
	from '@angular/router';
import { Injectable } from '@angular/core';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { SuccessOrErrorMessageService } from '../services/success-or-error-message.service';
import { LibraryComponent } from '../library/library.component';
import { FullSizeImageComponent } from '../library/image-viewer/full-size-image/full-size-image.component';


@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<LibraryComponent | FullSizeImageComponent> {


	// This guard is for keeping a user from navigating away from a route when they have unsaved
	// changes pending.  They must be asked if they want to save or discard changes first.


	constructor(
		private __router: Router,
		private __currentLibrary: CurrentLibraryService,
		private __successOrErrorMessage: SuccessOrErrorMessageService
	) {
	}


	canDeactivate(
		component: LibraryComponent | FullSizeImageComponent, 
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot, 
		nextState?: RouterStateSnapshot
	): boolean {

		if (Object.keys(this.__currentLibrary.changes).length) {
			this.__successOrErrorMessage.error = 
				'You have unsaved changes to the library.  Please save or discard them first.';
			return false;
		}
		else return true;
	}

}
