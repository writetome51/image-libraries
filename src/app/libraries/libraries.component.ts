import { Component } from '@angular/core';
import { ClearAlertOnDestroyComponent }
	from '../shared/abstract-components/clear-alert-on-destroy.component';
import { NewLibraryData as newLibrary }
	from '../../data-structures/runtime-state-data/new-library.data';


@Component({
	selector: 'app-libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertOnDestroyComponent {

	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}


}
