import { ActionMenuChoicesData as menuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice';
import { CurrentRouteService } from '@services/current-route.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { LibraryNamesData as libNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LocalZoomOnScrollService }
	from '@services/item-in-browser-storage/toggle-setting-in-browser-storage/local-zoom-on-scroll.service';
import { MenuChoicesManager } from '@interfaces/menu-choices-manager';
import { MenuChoice } from '@interfaces/menu-choice';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { not } from '@writetome51/not';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { prepend } from '@writetome51/array-append-prepend';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { SelectedImagesData as selectedImages }
	from '@runtime-state-data/selected-images.data';
import { SessionSelectMutipleImagesService }
	from '@toggle-setting-in-browser-storage/session-select-mutiple-images.service';


@Injectable()
export class GlobalActionMenuChoicesManagerService implements MenuChoicesManager {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __localZoomOnScroll: LocalZoomOnScrollService,
		private __sessionSelectMultiple: SessionSelectMutipleImagesService
	) {
	}


	getChoices(): MenuChoice[] {
		this.__manage();
		return menuChoices.global;
	}


	private __manage(): void {
		menuChoices.global = [];

		if (notEmpty(selectedImages.data)) {
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
			data: {
				checked: this.__localZoomOnScroll.get().enabled,
				toggleSetting: this.__localZoomOnScroll
			}
		};
		menuChoices.global.push(enableZoomOnScrolling);
	}


	private __includeManipulateSelected() {
		let choice: MenuChoice = {label: choiceLabel.addSelectedToLib};
		let _image_ids = selectedImages.data.map((img: { _id: string }) => img._id);

		choice['submenu'] = getArrFilled(libNames.length, (i) => {
			let libName = libNames[i];
			return {
				label: libName,
				data: {
					_image_ids,
					libName
				}
			};
		});
		prepend(choice, menuChoices.global);
	}


	private __removeManipulateSelected() {
		removeByTest(
			(choice) => (choice.label === choiceLabel.addSelectedToLib), menuChoices.global
		);
		removeByTest((choice) => (choice.label === choiceLabel.deleteSelected), menuChoices.global);

		let selectMultiple: CheckableMenuChoice = {
			label: choiceLabel.selectMultiple,
			data: {
				checked: this.__sessionSelectMultiple.get().enabled,
				toggleSetting: this.__sessionSelectMultiple
			}
		};
		prepend(selectMultiple, menuChoices.global);
	}


	private __includeInGlobal(choice: MenuChoice) {
		if (not(menuChoices.global.includes(choice))) {
			prepend(choice, menuChoices.global);
		}
	}

}
