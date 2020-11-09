import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames, ZoomOnScrollData }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { CurrentRouteService } from '@services/current-route.service';
import { Injectable } from '@angular/core';
import { isObject } from '@writetome51/is-object-not-object';
import { MenuChoicesManager } from '@interfaces/menu-choices-manager';
import { MenuChoice } from '@interfaces/menu-choice';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { not } from '@writetome51/not';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { prepend } from '@writetome51/array-append-prepend';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';
import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice';


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
		menuChoices.global = [];
		if (notEmpty(this.__selectedImages)) {
			this.__includeManipulateSelected();
		}
		else {
			this.__removeManipulateSelected();
		}

		this.__includeEnableZoomOnScroll();
	}


	private __includeEnableZoomOnScroll() {
		let enableZoomOnScrolling: CheckableMenuChoice = {
			label: choiceLabel.enableZoomOnScrolling,
			data: {checked: ZoomOnScrollData.enabled}
		};
		enableZoomOnScrolling.data['zoomOnScroll'] = ZoomOnScrollData;
		menuChoices.global.push(enableZoomOnScrolling);
	}


	private __includeManipulateSelected() {
		// temporarily commented out:
		//	choiceLabel.addSelectedToLib['submenu'] = libraryNames.data;

		/*
		menuChoices.global.push(
				choiceLabel.addSelectedToLib,
				choiceLabel.deleteSelected
		);
		*/
	}


	private __removeManipulateSelected() {
		removeByTest(
			(value) => (isObject(value) && (value.label === choiceLabel.addSelectedToLib)),
			menuChoices.global
		);
		removeFirstOf(choiceLabel.deleteSelected, menuChoices.global);

	//	this.__includeInGlobal(choiceLabel.selectMultiple);
	}


	private __includeInGlobal(choice: MenuChoice) {
		if (not(menuChoices.global.includes(choice))) {
			prepend(choice, menuChoices.global);
		}
	}

}
