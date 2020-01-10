import { Component } from '@angular/core';
import { LoadedLibraryService } from '../../services/library/loaded-library.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {


	get changesExist(): boolean {
		return this.__loadedLibrary.hasChanges;
	}


	constructor(private __loadedLibrary: LoadedLibraryService) {
	}


}
