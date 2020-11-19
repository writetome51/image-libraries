import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppImage } from '@interfaces/app-image';
import { CurrentRouteService } from '@services/current-route.service';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { MenuChoicesManager } from '@interfaces/menu-choices-manager';


@Injectable()
export class ImageActionMenuChoicesManagerService implements MenuChoicesManager {

	constructor(private __currentRoute: CurrentRouteService) {
	}


	getChoices(image: AppImage): MenuChoice[] {
		this.__manage(image);
		return menuChoices.images[image.name];
	}


	private __manage(image){
		menuChoices.images[image.name] = [
			{label: choiceLabel.addToLibrary, choices: libraryNames.data}
		];
	}

}
