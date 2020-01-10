import { Injectable } from '@angular/core';
import { CurrentUserLibrariesService } from './library/current-user-libraries.service';
import { LoadedLibraryService } from './library/loaded-library.service';


@Injectable({providedIn: 'root'})

export class RuntimeStateDataService {

	constructor(
		private __currentUserLibraries: CurrentUserLibrariesService,
		private __loadedLibrary: LoadedLibraryService,
	) {
	}


	unset(): void {
		this.__currentUserLibraries.unset_data();
		this.__loadedLibrary.unset_data();
	}

}
