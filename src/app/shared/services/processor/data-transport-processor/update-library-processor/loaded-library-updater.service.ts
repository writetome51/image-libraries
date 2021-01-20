import { DBLibrary } from '@interfaces/db-library.interface';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { GetUserLibrariesService } from '@services/get-user-libraries.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class LoadedLibraryUpdaterService {


	constructor(
		private __libraryStorage: GetUserLibrariesService,
	) {
	}


	async update(): Promise<any> {
	}




}
