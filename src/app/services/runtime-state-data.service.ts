import { Injectable } from '@angular/core';
import { CurrentUserLibrariesService } from './library/current-user-libraries.service';
import { CurrentLibraryService } from './library/current-library.service';


@Injectable({providedIn: 'root'})

export class RuntimeStateDataService {

	constructor(
		private __currentUserLibraries: CurrentUserLibrariesService,
		private __currentLibrary: CurrentLibraryService,
	) {
	}


	unset(): void {
		this.__currentUserLibraries.unset_data();
		this.__currentLibrary.unset_data();
	}

}
