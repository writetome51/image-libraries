import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getTail } from '@writetome51/array-get-head-tail';
import { LoadedLibraryService } from '../services/library/loaded-library.service';
import { LibraryNameService as libraryName } from '../services/library/library-name.service';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent {


	get name() {
		let url = this.__router.routerState.snapshot.url;
		let tailItems: string[] = getTail(1, url.split('/'));
		libraryName.data = tailItems[0];

		return libraryName.data;
	}


	get changesExist(): boolean {
		return this.__loadedLibrary.hasChanges;
	}


	constructor(
		private __router: Router,
		private __loadedLibrary: LoadedLibraryService
	) {
	}


}
