import { DBLibrary } from '@interfaces/db-library';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LocalLibrariesService } from '@services/local-storage-item/local-libraries.service';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})

export class RunTasksAfterGettingLibrariesService implements IDoThis {

	constructor(private __localLibraries: LocalLibrariesService) {
	}


	async go(result: DBLibrary[]) {
		this.__localLibraries.set(result);
		libraryNames.data = result.map((library: DBLibrary) => library.name);
	}

}
