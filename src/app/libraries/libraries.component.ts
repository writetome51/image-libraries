import { Component } from '@angular/core';
import { CreatingNewLibraryService as creatingNewLibrary }
	from '../services/creating-new-library.service';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
import { LibraryVerificationStatusService } from '../services/library-verification-status.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertOnDestroyComponent {


	get creatingNewLibrary(): boolean {
		return creatingNewLibrary.status;
	}


	get verifyingLibrary(): boolean {
		return LibraryVerificationStatusService.waitingForResult;
	}


}
