import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';
import { AppImage } from '@interfaces/app-image';
import { CurrentRouteService } from '@services/current-route.service';
import { Injectable } from '@angular/core';
import { isObject } from '@writetome51/is-object-not-object';
import { MenuChoiceLibraryData as choiceLib } from './menu-choice-library.data';
import { not } from '@writetome51/not';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { prepend } from '@writetome51/array-append-prepend';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';


@Injectable()
export class AppActionMenuChoicesManagerService {

	private readonly __selectedImages = selectedImageNames.data;


	constructor(private __currentRoute: CurrentRouteService) {
	}


	manageGlobal(): void {
		if (notEmpty(this.__selectedImages)) this.__includeManipulateSelected();
		else this.__removeManipulateSelected();
	}


	// For when action menu is used on one particular image

	manageImage(image: AppImage): void {
		menuChoices.images[image.name] = [
			{label: choiceLib.toggleAddRemoveImageToLibrary, choices: libraryNames.data}
		];

	}


	private __includeManipulateSelected() {
		menuChoices.global.push(
			{label: choiceLib.addSelected, choices: libraryNames.data},
			choiceLib.deleteSelected
		);
	}


	private __removeManipulateSelected() {
		removeByTest(
			(value) => (isObject(value) && (value.label === choiceLib.addSelected)),
			menuChoices.global
		);
		removeFirstOf(choiceLib.deleteSelected, menuChoices.global);

		this.__includeInGlobal(choiceLib.selectMultiple);
	}


	private __includeInGlobal(choice: AppActionMenuChoice) {
		if (not(menuChoices.global.includes(choice))) {
			prepend(choice, menuChoices.global);
		}
	}

}
