import { Component } from '@angular/core';
import { CurrentLibraryService } from '../../services/library/current-library.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {


	get changesExist(): boolean {
		return this.__loadedLibrary.hasChanges;
	}


	constructor(private __loadedLibrary: CurrentLibraryService) {
	}


}
