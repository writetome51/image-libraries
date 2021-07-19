import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ToggleEnableMenuChoiceService } from '@services/toggle-enable-menu-choice.service';
import { TogglableMenuChoiceData } from '@interfaces/togglable-menu-choice-data.interface';
import { ImageSelectorService } from '@services/image-selector.service';
import { ImageSelectionEnabledStateService }
	from '@global-action-menu_module/image-selection-enabled-state.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ToggleEnableImageSelectionService extends ToggleEnableMenuChoiceService {

	constructor(
		private __imageSelector: ImageSelectorService,
		private __selectionEnabledState$: ImageSelectionEnabledStateService
	) {
		super();
	}


	go(data: TogglableMenuChoiceData) {
		const previouslyEnabled = data.toggleSetting.get().enabled;
		super.go(data);
		const currentlyEnabled = data.toggleSetting.get().enabled;

		if (previouslyEnabled !== currentlyEnabled) {
			this.__selectionEnabledState$.next({selectionEnabled: currentlyEnabled});
		}
		if ( not(currentlyEnabled) ) this.__imageSelector.unselectAll();
	}

}
