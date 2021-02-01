import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { CheckableMenuChoice } // tslint:disable-next-line:max-line-length
	from '@action-menu/action-menu-choices/menu-choice/executable-menu-choice/checkable-menu-choice.interface';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { DBLibrary } from '@interfaces/db-library.interface';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { MenuChoice } from '@action-menu/menu-choice.interface';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { GetMenuChoices } from '@action-menu/get-menu-choices.interface';


@Injectable()
export class GetImageActionMenuChoicesService implements GetMenuChoices {

	constructor(
		private __librariesInBrowser: LibrariesInBrowserStorageService
	) {
	}


	go(image: DBImage): MenuChoice[] {
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
		let lib: DBLibrary = this.__librariesInBrowser.get()[libName];

		return lib._image_ids.includes(image_id);
	}

}
