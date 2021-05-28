import {
	ActionMenuChoicesData as menuChoices, UserLibraryNamesData as libraryNames
} from '@runtime-state-data/static-classes/auto-resettable.data';
import { ImageRecord } from '@interfaces/image-record.interface';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { Injectable } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { MenuChoice } from '@action-menu_module/menu-choice.interface';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { MenuChoicesManager } from '@action-menu_module/menu-choices-manager.interface';
import { ImageActionMenuServicesModule } from './image-action-menu-services.module';
import { CheckableMenuChoice } from '@action-menu_module/checkable-menu-choice.interface';
import { setArray } from '@writetome51/set-array';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ImageActionMenuChoicesManagerService implements MenuChoicesManager {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {}


	getChoices(image: ImageRecord): MenuChoice[] {
		this.manage(image);
		return menuChoices.images[image.name];
	}


	manage(image: ImageRecord) {
		if (!(menuChoices.images[image.name])) menuChoices.images[image.name] = [];

		setArray(menuChoices.images[image.name],
			[{
				label: choiceLabel.toggleAddImageToLibrary,
				submenu: this.__getSubmenu(
					choiceLabel.toggleAddImageToLibrary, libraryNames.data, image._id
				)
			}]
		);
	}


	private __getSubmenu(parentLabel, libNames, image_id): CheckableMenuChoice[] {

		return libNames.map((libName) => {
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
		let lib: LibraryRecord = this.__librariesInBrowser.get()[libName];

		return lib._image_ids.includes(image_id);
	}

}
