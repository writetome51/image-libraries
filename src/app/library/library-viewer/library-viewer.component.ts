import { Component } from '@angular/core';
import { CurrentLibraryService } from '../../services/library/current-library.service';
import { LibraryModuleRouteService } from '../library-module-route.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	moduleRoute = LibraryModuleRouteService;


	get changesExist(): boolean {
		return this.__loadedLibrary.hasChanges;
	}


	constructor(private __loadedLibrary: CurrentLibraryService) {
	}


}
