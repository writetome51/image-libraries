import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ToggleEnableMenuChoiceService }
	from '@action-menu_module/toggle-enable-menu-choice.service';
import { TogglableMenuChoiceData } from '@action-menu_module/togglable-menu-choice-data.interface';
import { ImageSelectorService } from '@services/image-selector.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ToggleEnableImageSelectionService extends ToggleEnableMenuChoiceService {

	constructor(private __imageSelector: ImageSelectorService) {
		super();
	}


	go(data: TogglableMenuChoiceData) {
		super.go(data);
		if (not( data.toggleSetting.get().enabled )) this.__imageSelector.unselectAll();
	}

}
