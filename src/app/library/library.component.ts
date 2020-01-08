import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getTail } from '@writetome51/array-get-head-tail';
import { LoadedLibraryService } from '../services/library/loaded-library.service';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent {


	get name() {
		let url = this.__router.routerState.snapshot.url;
		return getTail(1, url.split('/'));
	}


	get changesExist(): boolean {
		return (Object.keys(this.__loadedLibrary.data.changes).length > 0);
	}


	constructor(
		private __router: Router,
		private __loadedLibrary: LoadedLibraryService
	) {
	}


}
