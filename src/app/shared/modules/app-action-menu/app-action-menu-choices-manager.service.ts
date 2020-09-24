import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppImage } from '@interfaces/app-image';
import { CurrentRouteService } from '@services/current-route.service';
import { Injectable } from '@angular/core';
import { isObject } from '@writetome51/is-object-not-object';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';


@Injectable()
export class AppActionMenuChoicesManagerService {

	private readonly __addSelected = 'Add Selected to Library';
	private readonly __deleteSelected = 'Delete Selected';
	private readonly __selectedImages = selectedImageNames.data;


	constructor(private __currentRoute: CurrentRouteService) {
	}


	manageGlobal(): void {
		if (notEmpty(this.__selectedImages)) this.__includeManipulateSelected();
		else this.__removeManipulateSelected();
	}


	// For when action menu is used on one particular image

	manageImage(image: AppImage): void {
	}


	private __includeManipulateSelected() {
		menuChoices.global.push(
			{label: this.__addSelected, choices: libraryNames.data},
			this.__deleteSelected
		);
	}


	private __removeManipulateSelected() {
		removeByTest(
			(value) => (isObject(value) && (value.label === this.__addSelected)),
			menuChoices.global
		);
		removeFirstOf(this.__deleteSelected, menuChoices.global);
	}


}
