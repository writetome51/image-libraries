import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
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
import { MenuChoicesManager } from '@interfaces/menu-choices-manager';
import { MenuChoice } from '@interfaces/menu-choice';


@Injectable()
export class GlobalActionMenuChoicesManagerService implements MenuChoicesManager {

	private readonly __selectedImages = selectedImageNames.data;


	constructor(private __currentRoute: CurrentRouteService) {
	}


	getChoices(): MenuChoice[] {
		this.__manage();
		return menuChoices.global;
	}


	private __manage(): void {
		if (notEmpty(this.__selectedImages)) this.__includeManipulateSelected();
		else this.__removeManipulateSelected();

		this.__includeEnableZoomOnScroll();
	}


	private __includeEnableZoomOnScroll() {
		menuChoices.global.push(
			choiceLib.enableZoomOnScrolling
		);
	}


	private __includeManipulateSelected() {
		choiceLib.addSelected['submenu'] = libraryNames.data;

		menuChoices.global.push(
			choiceLib.addSelected,
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


	private __includeInGlobal(choice: MenuChoice) {
		if (not(menuChoices.global.includes(choice))) {
			prepend(choice, menuChoices.global);
		}
	}

}
