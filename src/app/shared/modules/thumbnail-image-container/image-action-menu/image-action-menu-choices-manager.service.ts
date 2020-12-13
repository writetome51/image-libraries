import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice';
import { CurrentRouteService } from '@services/current-route.service';
import { DBImage } from '@interfaces/db-image';
import { DBLibrary } from '@interfaces/db-library';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { LocalLibrariesService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-libraries.service';
import { MenuChoice } from '@interfaces/menu-choice';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { MenuChoicesManager } from '@interfaces/menu-choices-manager';


@Injectable()
export class ImageActionMenuChoicesManagerService implements MenuChoicesManager {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __localLibraries: LocalLibrariesService
	) {
	}


	getChoices(image: DBImage): MenuChoice[] {
		this.__manage(image);
		return menuChoices.images[image.name];
	}


	private __manage(image: DBImage) {
		menuChoices.images[image.name] = [
			{
				label: choiceLabel.addToRemoveFromLibrary,
				submenu: this.__getSubmenu(
					choiceLabel.addToRemoveFromLibrary, libraryNames.data, image._id
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
