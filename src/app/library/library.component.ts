import { Component, OnInit } from '@angular/core';
import { RequestedLibraryData as requestedLibrary }
	from '../data/runtime-state-data/requested-library.data';
import { ClearAlertOnDestroyComponent } from '../clear-alert-on-destroy.component';
import { LibraryVerifierService } from './library-verifier.service';


@Component({
	selector: 'app-library',
	template: `
		<header><h2>{{name}}</h2></header>
		<library-viewer></library-viewer>
	`
})
export class LibraryComponent extends ClearAlertOnDestroyComponent implements OnInit {

	get name() {
		return requestedLibrary.name;
	}


	constructor(private __libraryVerifier: LibraryVerifierService) {
		super();
	}


	async ngOnInit() {
		await this.__libraryVerifier.verify();
	}

}
