import { MenuChoicesManager } from '@interfaces/menu-choices-manager.interface';
import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice.interface';
import { GlobalActionMenuChoicesService as menuChoices }
	from '../global-action-menu-choices.service';
import { IncludeImageSelectionChoicesService } from './include-image-selection-choices.service';
import { ChoicesOnManipulatingSelectedImagesService }
	from './choices-on-manipulating-selected-images.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesManagerService implements MenuChoicesManager {

	constructor(
		private __choicesOnManipulatingSelectedImages: ChoicesOnManipulatingSelectedImagesService,
		private __includeImageSelectionChoices: IncludeImageSelectionChoicesService
	) {}


	getChoices(): MenuChoice[] {
		this.manage();
		return menuChoices.get();
	}


	manage(data = undefined): void {
		this.__includeImageSelectionChoices.go();

		if (data && data.imagesSelected) this.__choicesOnManipulatingSelectedImages.include();
		else this.__choicesOnManipulatingSelectedImages.remove();
	}

}
