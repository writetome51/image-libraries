import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { CurrentLibraryData as library } from '../data/current-library.data';
import { RequestedLibraryData as requestedLibrary }
	from '../data/requested-library.data';
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
		return hasValue(library.data);
	}


}
