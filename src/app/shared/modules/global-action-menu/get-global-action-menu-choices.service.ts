import { ActionMenuChoicesData as menuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { CheckableMenuChoice }
	from '@menu-choice/executable-menu-choice-container/checkable-menu-choice.interface';
import { CurrentRouteService } from '@services/current-route.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { LibraryNamesData as libNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { GetMenuChoices } from '@action-menu/get-menu-choices.interface';
import { MenuChoice } from '@action-menu/menu-choice.interface';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { not } from '@writetome51/not';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { prepend } from '@writetome51/array-append-prepend';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { SelectedImagesData as selectedImages }
	from '@runtime-state-data/selected-images.data';
import { SelectMutipleImagesSettingService }
	from '@toggle-setting-in-browser-storage/select-mutiple-images-setting.service';


@Injectable({providedIn: 'root'})
export class GetGlobalActionMenuChoicesService implements GetMenuChoices {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __selectMultipleImagesSetting: SelectMutipleImagesSettingService
	) {
	}


	go(): MenuChoice[] {
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
			(choice) => (choice.label === choiceLabel.addSelectedToLib),
			menuChoices.global
		);
		removeByTest(
			(choice) => (choice.label === choiceLabel.deleteSelectedImages),
			menuChoices.global
		);

		let selectMultiple: CheckableMenuChoice = {
			label: choiceLabel.selectMultipleImages,
			data: {
				checked: this.__selectMultipleImagesSetting.get().enabled,
				toggleSetting: this.__selectMultipleImagesSetting
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
