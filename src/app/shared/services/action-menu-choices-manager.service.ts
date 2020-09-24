import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppImage } from '@interfaces/app-image';
import { CurrentRouteService } from './current-route.service';
import { Injectable } from '@angular/core';
import { isObject } from '@writetome51/is-object-not-object';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';


@Injectable({providedIn: 'root'})

export class ActionMenuChoicesManagerService {

	private readonly __addSelected = 'Add Selected to Library';
	private readonly __deleteSelected = 'Delete Selected';
	private readonly __selectedImages = selectedImageNames.data;


	constructor(private __currentRoute: CurrentRouteService) {
	}


	manage(): void {
		if (notEmpty(this.__selectedImages)) this.__includeManipulateSelected();
		else this.__removeManipulateSelected();
	}


	// For when action menu is used on one particular image

	manageImage(image: AppImage): void {

	}


	private __includeManipulateSelected() {
		menuChoices.data.push(
			{label: this.__addSelected, choices: libraryNames.data},
			this.__deleteSelected
		);
	}


	private __removeManipulateSelected() {
		removeByTest(
			(value) => (isObject(value) && (value.label === this.__addSelected)),
			menuChoices.data
		);
		removeFirstOf(this.__deleteSelected, menuChoices.data);
	}


}
