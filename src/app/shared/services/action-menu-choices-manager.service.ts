import { ActionMenuChoicesData as menuChoices }
	from '../../../data-structures/runtime-state-data/static-classes/resettable-to-default/action-menu-choices.data';
import { CurrentRouteService } from './current-route.service';
import { Injectable } from '@angular/core';
import { LibraryNamesData }
	from '../../../data-structures/runtime-state-data/static-classes/resettable-to-default/library-names.data';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { SelectedImageNamesData as selectedImageNames }
	from '../../../data-structures/runtime-state-data/selected-image-names.data';


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
				{label: 'Add Selected to Library', choices: LibraryNamesData.data},
				'Delete Selected'
			);
		}
	}


}
