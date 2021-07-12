import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from '../menu-choice-label.data';
import { EnableImageSelectionSettingService }
	from '@browser-storage/enable-image-selection-setting.service';
import { GlobalActionMenuChoicesService as menuChoices }
	from '../global-action-menu-choices.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class IncludeImageSelectionChoicesService {

	constructor(private __enableImageSelectionSetting: EnableImageSelectionSettingService) {}


	go() {
		this.__includeEnableSelection();

		if (this.__enableImageSelectionSetting.get().enabled) {
			menuChoices.addChoice({label: choiceLabel.selectAll});
		}
	}


	private __includeEnableSelection() {
		menuChoices.addChoice({
			label: choiceLabel.enableImageSelection,
			data: {
				checked: this.__enableImageSelectionSetting.get().enabled,
				toggleSetting: this.__enableImageSelectionSetting
			}
		});
	}

}
