import { DBLibrary } from '../../../../../interfaces/db-library';
import { IDoThis } from '../../../../../interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LibraryNamesData as libraryNames }
	from '../../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/library-names.data';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterGettingLibrariesService implements IDoThis {

	async go(result: DBLibrary[]) {
		libraryNames.data = result.map((library: DBLibrary) => library.name);
	}

}
