import { Component } from '@angular/core';
import { CreatingNewLibraryData as creatingNewLibrary }
	from '../runtime-state-data/creating-new-library.data';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
import { LibraryVerificationStatusData as libVerificationStatus }
	from '../runtime-state-data/library-verification-status.data';
import { LibrariesModuleRouteService } from './libraries-module-route.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertOnDestroyComponent {

	moduleRoute = LibrariesModuleRouteService;


	get creatingNewLibrary(): boolean {
		return creatingNewLibrary.status;
	}


	get verifyingLibrary(): boolean {
		return libVerificationStatus.waitingForResult;
	}


}
