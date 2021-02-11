import { Component } from '@angular/core';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {

	noLibrariesMessage = 'You have no libraries right now';


	get names(): string[] {
		return libraryNames.data;
	}

}
