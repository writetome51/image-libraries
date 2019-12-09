import { Component } from '@angular/core';
import { CurrentUserLibrariesService } from '../../services/library/current-user-libraries.service';
import { AppLibrary } from '../../interfaces/app-library';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {

	get libraries(): AppLibrary[] {
		return this.__currentUserLibraries.data;
	}


	constructor(private __currentUserLibraries: CurrentUserLibrariesService) {
	}

}
