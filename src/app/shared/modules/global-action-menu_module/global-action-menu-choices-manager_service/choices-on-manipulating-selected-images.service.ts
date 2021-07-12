import { GlobalActionMenuChoicesService as menuChoices }
	from '../global-action-menu-choices.service';
import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { LibraryNamesData as libNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { MenuChoiceLabelData as choiceLabel } from '../menu-choice-label.data';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ChoicesOnManipulatingSelectedImagesService {

	constructor(
		private __loadedImagesState: LoadedImagesStateService,
		private __loadedLibraryInBrowser: LoadedLibraryInBrowserStorageService
	) {}


	include() {
		this.__includeAddToOrRemoveSelectedFromLib();
		menuChoices.addChoice({label: choiceLabel.deleteSelectedImages});
	}


	remove() {
		menuChoices.removeChoices([
			choiceLabel.addSelectedToLib,
			choiceLabel.deleteSelectedImages,
			choiceLabel.removeSelectedFromLib
		]);
	}


	private __includeAddToOrRemoveSelectedFromLib() {
		if (this.__loadedImagesState.getOrigin() === 'all') {
			this.__includeAddSelectedToLib();
			menuChoices.removeChoices([choiceLabel.removeSelectedFromLib]);
		}
		else {
			this.__includeRemoveSelectedFromLib();
			menuChoices.removeChoices([choiceLabel.addSelectedToLib]);
		}
	}


	private __includeRemoveSelectedFromLib() {
		menuChoices.addChoice({
			label: choiceLabel.removeSelectedFromLib,
			data: {libName: this.__loadedLibraryInBrowser.get().name}
		});
	}


	private __includeAddSelectedToLib() {
		menuChoices.addChoice({
			label: choiceLabel.addSelectedToLib,
			submenu: libNames.data.map((libName) => {
				return {
					label: choiceLabel.addSelectedToLib  + '.' + libName,
					data: {libName}
				};
			})
		});
	}

}
