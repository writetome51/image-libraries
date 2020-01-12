import { Component } from '@angular/core';
import { getTail } from '@writetome51/array-get-head-tail';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { LibraryNameService as libraryName } from '../services/library/library-name.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent {


	get name() {
		if (hasValue(this.__loadedLibrary.data) &&
			(libraryName.data === this.__loadedLibrary.data.name)) {

			return libraryName.data;
		}
	}


	get libraryLoaded() {
		return hasValue(this.__loadedLibrary.data);
	}


	constructor(
		private __router: Router,
		private __loadedLibrary: CurrentLibraryService
	) {
		let url = this.__router.routerState.snapshot.url;
		let [lastItem] = getTail(1, url.split('/'));

		libraryName.data = lastItem;

		if (noValue(this.__loadedLibrary.data) ||
			(libraryName.data !== this.__loadedLibrary.data.name)) {

			this.__loadedLibrary.set_data();
			console.log('loaded!');
		}
	}


}
