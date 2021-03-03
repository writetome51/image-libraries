import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { FullSizeImageComponent }
	from '@app/routed-modules/full-size-image-viewer_module/full-size-image.component';
import { Injectable } from '@angular/core';
import { LibraryComponent } from '@app/routed-modules/library_module/library.component';
import { LibraryChangesService } from '@services/library/library-changes.service';


@Injectable({providedIn: 'root'})
export class CanDeactivateGuard implements CanDeactivate<LibraryComponent | FullSizeImageComponent> {

	constructor(private __libraryChanges: LibraryChangesService) {
	}


	canDeactivate(
		//	component: LibraryComponent | FullSizeImageComponent,
		//	currentRoute: ActivatedRouteSnapshot,
		//	currentState: RouterStateSnapshot,
		//	nextState?: RouterStateSnapshot
	): boolean {

		if (this.__libraryChanges.exist) {
			alert.error =
				'You have unsaved changes to the library.  Please save or discard them first.';
			return false;
		}
		return true;
	}

}
