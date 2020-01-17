import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { RequestedLibraryService as requestedLibrary }
	from '../services/library/requested-library.service';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent extends ClearAlertOnDestroyComponent {


	get name() {
		return requestedLibrary.name;
	}


	get libraryLoaded() {
		return hasValue(this.__currentLibrary.data);
	}


	constructor(private __currentLibrary: CurrentLibraryService) {
		super();
	}


}
