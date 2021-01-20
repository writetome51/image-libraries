import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { CheckableMenuChoice }
	from '@action-menu/action-menu-choices/menu-choice/executable-menu-choice/checkable-menu-choice.interface';
import { CurrentRouteService } from '@services/current-route.service';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { DBLibrary } from '@interfaces/db-library.interface';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';
import { MenuChoice } from '@action-menu/menu-choice.interface';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { MenuChoicesManager } from '@action-menu/menu-choices-manager.interface';


@Injectable()
export class ImageActionMenuChoicesManagerService implements MenuChoicesManager {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __localLibraries: LibrariesInBrowserStorageService
	) {
	}


	getChoices(image: DBImage): MenuChoice[] {
		this.__manage(image);
		return menuChoices.images[image.name];
	}


	private __manage(image: DBImage) {
		menuChoices.images[image.name] = [
			{
				label: choiceLabel.toggleAddImageToLibrary,
				submenu: this.__getSubmenu(
					choiceLabel.toggleAddImageToLibrary, libraryNames.data, image._id
				)
			}
		];
	}


	private __getSubmenu(parentLabel, libNames, image_id): CheckableMenuChoice[] {

		return getArrFilled(libNames.length, (i) => {
			let libName = libNames[i];
			return {
				label: parentLabel + '.' + libName,
				data: {
					checked: this.__libContainsImage(image_id, libName),
					image_id,
					libName
				}
			};
		});
	}


	private __libContainsImage(image_id, libName): boolean {
		let lib: DBLibrary = this.__localLibraries.get()[libName];

		return lib._image_ids.includes(image_id);
	}

}
