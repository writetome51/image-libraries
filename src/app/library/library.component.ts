import { Component } from '@angular/core';
import { RequestedLibraryData as requestedLibrary }
	from '../data-structures/runtime-state-data/requested-library.data';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
import { LibraryVerifierService } from './library-verifier.service';
import { LibraryPaginatorService } from '../services/paginator/library-paginator.service';
import { CurrentRouteService } from '../services/current-route.service';
import { URLParamIDData as paramID } from '../data-structures/read-only-data/url-param-id.data';
import { AllImagesStatusData as allImagesStatus }
	from '../data-structures/runtime-state-data/static-classes/all-images-status.data';


@Component({
	selector: 'app-library',
	template: `
		<header><h2>{{name}}</h2></header>
		<library-viewer></library-viewer>
		<button (click)="nextPage()">Next Page</button>
		<button (click)="previousPage()">Previous Page</button>
	`
})
export class LibraryComponent extends ClearAlertOnDestroyComponent {

	get name() {
		return requestedLibrary.name;
	}


	constructor(
		private __libraryVerifier: LibraryVerifierService,
		private __paginator: LibraryPaginatorService,
		private __currentRoute: CurrentRouteService
	) {
		super();
		allImagesStatus.loaded = false;

		this.__libraryVerifier.verify(this.__currentRoute.params[paramID.libName]).then(
			async () => {
				let page = Number(this.__currentRoute.params[paramID.pageNumber]);
				if (page > 1) await this.__paginator.set_currentPageNumber(page);
			}
		);
	}


	nextPage() {
		this.__paginator.set_currentPageNumber(this.__paginator.currentPageNumber + 1);
	}


	previousPage() {
		this.__paginator.set_currentPageNumber(this.__paginator.currentPageNumber - 1);
	}

}
