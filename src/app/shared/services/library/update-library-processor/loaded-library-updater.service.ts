import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { LibraryStorageService } from '@services/library-storage.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class LoadedLibraryUpdaterService {


	constructor(
		private __libraryStorage: LibraryStorageService,
	) {
	}


	async update(): Promise<any> {
	}




}
