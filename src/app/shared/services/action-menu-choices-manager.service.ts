import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppImage } from '@interfaces/app-image';
import { CurrentRouteService } from './current-route.service';
import { Injectable } from '@angular/core';
import { isObject } from '@writetome51/is-object-not-object';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';


@Injectable({providedIn: 'root'})

export class ActionMenuChoicesManagerService {

	private readonly __addSelected = 'Add Selected to Library';
	private readonly __deleteSelected = 'Delete Selected';


	constructor(private __currentRoute: CurrentRouteService) {
	}


	manage(): void {
		// Must check conditions concerning the state of certain data structures,
		// i.e, if selectedImageNames.data contains items, add 'Delete Selected Images'
		// to menuChoices.data

		if (notEmpty(selectedImageNames.data)) this.__includeAddSelectedToLibrary();
		else this.__removeAddSelectedToLibrary();
	}


	manageImage(image: AppImage): void {

	}


	private __includeAddSelectedToLibrary() {
		menuChoices.data.push(
			{label: this.__addSelected, choices: libraryNames.data},
			this.__deleteSelected
		);
	}


	private __removeAddSelectedToLibrary() {
		removeByTest(
			(value) => (isObject(value) && (value.label === this.__addSelected)),
			menuChoices.data
		);
		removeFirstOf(this.__deleteSelected, menuChoices.data);
	}


}
