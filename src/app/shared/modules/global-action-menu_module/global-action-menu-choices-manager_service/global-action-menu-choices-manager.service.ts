import { MenuChoicesManager } from '@interfaces/menu-choices-manager.interface';
import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice.interface';
import { GlobalActionMenuChoicesService as menuChoices }
	from '../global-action-menu-choices.service';
import { ImageSelectionChoicesManagerService } from './image-selection-choices-manager.service';
import { ManipulateSelectedImagesChoicesManagerService }
	from './manipulate-selected-images-choices-manager.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesManagerService implements MenuChoicesManager {

	constructor(
		private __manipulateSelectedImagesChoicesManager:
			ManipulateSelectedImagesChoicesManagerService,
		private __imageSelectionChoicesManager: ImageSelectionChoicesManagerService
	) {}


	getChoices(): MenuChoice[] {
		this.manage();
		return menuChoices.get();
	}


	manage(data = undefined): void {
		this.__imageSelectionChoicesManager.manage(data);
		this.__manipulateSelectedImagesChoicesManager.manage(data);
	}

}
