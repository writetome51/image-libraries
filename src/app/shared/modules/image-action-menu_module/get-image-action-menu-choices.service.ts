import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { DBImage } from '@interfaces/db-image.interface';
import { DBLibrary } from '@interfaces/db-library.interface';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from '@services/browser-storage/libraries-in-browser-storage.service';
import { MenuChoice } from '@app/shared/modules/action-menu_module/menu-choice.interface';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { GetMenuChoices } from '@app/shared/modules/action-menu_module/get-menu-choices.interface';
import { ImageActionMenuServicesModule } from './image-action-menu-services.module';
import { CheckableMenuChoice } from '@app/shared/modules/action-menu_module/checkable-menu-choice.interface';


@Injectable({providedIn: ImageActionMenuServicesModule})
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
