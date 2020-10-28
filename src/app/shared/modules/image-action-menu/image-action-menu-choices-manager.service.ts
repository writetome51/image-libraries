import { ActionMenuChoicesData as menuChoices, LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppImage } from '@interfaces/app-image';
import { CurrentRouteService } from '@services/current-route.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLibraryData as choiceLib } from './menu-choice-library.data';


@Injectable()
export class ImageActionMenuChoicesManagerService {


	constructor(private __currentRoute: CurrentRouteService) {
	}


	manage(image: AppImage): void {
		menuChoices.images[image.name] = [
			{label: choiceLib.toggleAddRemoveImageToLibrary, choices: libraryNames.data}
		];

	}


}
