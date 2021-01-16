import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { GetUsersLibrariesService } from '@services/get-users-libraries.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class LoadedLibraryUpdaterService {


	constructor(
		private __libraryStorage: GetUsersLibrariesService,
	) {
	}


	async update(): Promise<any> {
	}




}
