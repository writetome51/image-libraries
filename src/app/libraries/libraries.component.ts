import { Component } from '@angular/core';
import { CreatingNewLibraryService as creatingNewLibrary }
	from '../services/creating-new-library.service';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertOnDestroyComponent {


	get creatingNewLibrary() {
		return creatingNewLibrary.status;
	}


}
