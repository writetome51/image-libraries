import { UserLibraryNamesData as libNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { MenuChoicesManager } from '@action-menu_module/menu-choices-manager.interface';
import { GlobalActionMenuServicesModule } from './global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@action-menu_module/menu-choice.interface';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { SelectMutipleImagesSettingService }
	from '@browser-storage/select-mutiple-images-setting.service';
import { ImagesOrigin } from '@app/shared/types/images-origin.type';
import { LoadedImagesStateService }
		from '@services/loaded-image-state_service/loaded-images-state.service';
import { GlobalActionMenuChoicesService } from './global-action-menu-choices.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesManagerService implements MenuChoicesManager {

	private readonly __menuContext: ImagesOrigin | "none";


	constructor(
		private __menuChoices: GlobalActionMenuChoicesService,
		private __loadedImagesState: LoadedImagesStateService,
		private __selectMultipleImagesSetting: SelectMutipleImagesSettingService,
	) {
		this.__menuContext = this.__loadedImagesState.getOrigin();
	}


	getChoices(): MenuChoice[] {
		this.manage();
		return this.__menuChoices.get();
	}


	manage(data = undefined): void {
		this.__includeSelectMultiple();

		if (selectedImages.data.length) this.__includeManipulateSelected();
		else this.__removeManipulateSelected();
	}


	private __includeSelectMultiple() {
		this.__menuChoices.addChoice({
			label: choiceLabel.selectMultipleImages,
			data: {
				checked: this.__selectMultipleImagesSetting.get().enabled,
				toggleSetting: this.__selectMultipleImagesSetting
			}
		});
	}


	private __includeManipulateSelected() {
		if (this.__menuContext !== 'library') this.__includeAddSelected();
		else this.__menuChoices.addChoice({label: choiceLabel.removeSelectedFromLib});

		this.__menuChoices.addChoice({label: choiceLabel.deleteSelectedImages});
	}


	private __removeManipulateSelected() {
		this.__menuChoices.removeChoices(
			[choiceLabel.addSelectedToLib, choiceLabel.deleteSelectedImages]
		);
	}


	private __includeAddSelected() {
		this.__menuChoices.addChoice({
			label: choiceLabel.addSelectedToLib,
			submenu: libNames.data.map((libName) => {
				return {
					label: choiceLabel.addSelectedToLib  + '.' + libName,
					data: {selectedImages: selectedImages.data,  libName}
				};
			})
		});
	}

}
