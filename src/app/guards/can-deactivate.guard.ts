import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot }
	from '@angular/router';
import { CurrentLibraryData } from '../data/current-library.data';
import { FullSizeImageComponent }
	from '../library/image-viewer/full-size-image/full-size-image.component';
import { Injectable } from '@angular/core';
import { LibraryComponent } from '../library/library.component';
import { AlertService as alert } from '../services/alert.service';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { LibraryChangesService as libraryChanges } from '../services/library/library-changes.service';


@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<LibraryComponent | FullSizeImageComponent> {


	canDeactivate(
		//	component: LibraryComponent | FullSizeImageComponent,
		//	currentRoute: ActivatedRouteSnapshot,
		//	currentState: RouterStateSnapshot,
		//	nextState?: RouterStateSnapshot
	): boolean {

		if (libraryChanges.exist) {
			alert.error =
				'You have unsaved changes to the library.  Please save or discard them first.';
			return false;
		}
		return true;
	}

}
