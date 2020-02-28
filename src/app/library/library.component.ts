import { Component } from '@angular/core';
import { RequestedLibraryData as requestedLibrary }
	from '../data/runtime-state-data/requested-library.data';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
import { CurrentRouteService } from '../services/current-route.service';


@Component({
	selector: 'app-library',
	template: `
		<header><h2>{{name}}</h2></header>
		<library-viewer></library-viewer>
	`
})
export class LibraryComponent extends ClearAlertOnDestroyComponent {

	get name() {
		return this.__currentRoute.data;

		// return requestedLibrary.name;
	}


	constructor(private __currentRoute: CurrentRouteService) {
		super();
	}

}
