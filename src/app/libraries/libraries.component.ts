import { AppLibrary } from '../interfaces/app-library';
import { Component, OnInit } from '@angular/core';
import { CurrentUserLibrariesService } from '../services/library/current-user-libraries.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent implements OnInit {


	noLibrariesMessage = 'You have no libraries right now';
	creatingNewLibrary = false;


	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


	constructor(private __currentUserLibraries: CurrentUserLibrariesService) {
	}


	ngOnInit(): void {
		this.creatingNewLibrary = false;
	}


}
