import { Component } from '@angular/core';
import { CreatingNewLibraryData as creatingNewLibrary }
	from '../data/runtime-state-data/creating-new-library.data';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
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


}
