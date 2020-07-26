import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames}
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { CurrentRouteService } from './current-route.service';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';


@Injectable({providedIn: 'root'})

export class ActionMenuChoicesManagerService {


	constructor(private __currentRoute: CurrentRouteService) {
	}


	manage(): void {
		// Must check conditions concerning the state of certain data structures,
		// i.e, if selectedImageNames.data contains items, add 'Delete Selected Images'
		// to menuChoices.data

		if (notEmpty(selectedImageNames.data)) {
			menuChoices.data.push(
				{label: 'Add Selected to Library', choices: libraryNames.data},
				'Delete Selected'
			);
		}
	}


}
