import { Injectable } from '@angular/core';
import { DBLibrary } from '../../../../../interfaces/db-library';
import { LibraryNamesData as libraryNames }
	from '../../../../../data-structures/runtime-state-data/static-classes/library-names.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulGettingLibraryNamesService implements IDoThis {

	async go(result: DBLibrary[]) {
		libraryNames.data = result.map((library: DBLibrary) => library.name);
	}

}
