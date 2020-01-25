import { Component } from '@angular/core';
import { CreatingNewLibraryData as creatingNewLibrary }
	from '../data/creating-new-library.data';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
import { LibraryVerificationStatusData as libVerificationStatus }
	from '../data/library-verification-status.data';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertOnDestroyComponent {


	get creatingNewLibrary(): boolean {
		return creatingNewLibrary.status;
	}


	get verifyingLibrary(): boolean {
		return libVerificationStatus.waitingForResult;
	}


}
