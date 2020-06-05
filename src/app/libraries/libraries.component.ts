import { Component } from '@angular/core';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
import { LibrariesModuleRouteService } from './libraries-module-route.service';
import { NewLibraryData as newLibrary }
	from '../../data-structures/runtime-state-data/new-library.data';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent extends ClearAlertOnDestroyComponent {

	moduleRoute = LibrariesModuleRouteService;


	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}


}
