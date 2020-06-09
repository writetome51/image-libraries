import { Component } from '@angular/core';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
import { LibrariesModuleRouteData } from './libraries-module-route.data';
import { NewLibraryData as newLibrary }
	from '../../data-structures/runtime-state-data/new-library.data';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertOnDestroyComponent {

	moduleRoute = LibrariesModuleRouteData;


	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}


}
