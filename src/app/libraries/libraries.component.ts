import { AppLibrary } from '../interfaces/app-library';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrentUserLibrariesService } from '../services/library/current-user-libraries.service';
import { CreatingNewLibraryService as creatingNewLibrary }
	from '../services/creating-new-library.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent implements OnInit, OnDestroy {


	noLibrariesMessage = 'You have no libraries right now';


	get creatingNewLibrary() {
		return creatingNewLibrary.status;
	}


	set creatingNewLibrary(value) {
		creatingNewLibrary.status = value;
	}


	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


	constructor(private __currentUserLibraries: CurrentUserLibrariesService) {
	}


	async ngOnInit() {
		creatingNewLibrary.status = false;
		await this.__currentUserLibraries.set_data();
	}


	ngOnDestroy() {
		this.__currentUserLibraries.unset_data();
	}


}
