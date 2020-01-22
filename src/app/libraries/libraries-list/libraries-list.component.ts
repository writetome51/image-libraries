import { Component } from '@angular/core';
import { CurrentUserLibrariesService } from '../../services/library/current-user-libraries.service';
import { noValue } from '@writetome51/has-value-no-value';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {

	noLibrariesMessage = 'You have no libraries right now';


	get libraries(): string[] {
		return this.__currentUserLibraries.data;
	}


	constructor(private __currentUserLibraries: CurrentUserLibrariesService) {
		if (noValue(this.__currentUserLibraries.data)) {
			this.__currentUserLibraries.set_data();
		}
	}

}
