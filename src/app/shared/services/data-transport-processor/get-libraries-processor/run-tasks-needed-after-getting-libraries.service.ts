import { DBLibrary } from '@interfaces/db-library';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterGettingLibrariesService implements IDoThis {

	async go(result: DBLibrary[]) {
		libraryNames.data = result.map((library: DBLibrary) => library.name);
	}

}
