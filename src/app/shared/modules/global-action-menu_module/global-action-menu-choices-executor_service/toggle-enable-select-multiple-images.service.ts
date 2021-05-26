import { GlobalActionMenuServicesModule } from '../global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { ToggleEnableMenuChoiceService } from './toggle-enable-menu-choice.service';
import { TogglableMenuChoiceData } from './togglable-menu-choice-data.interface';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ToggleEnableSelectMultipleImagesService extends ToggleEnableMenuChoiceService {

	go(data: TogglableMenuChoiceData) {
		super.go(data);
		if (not( data.toggleSetting.get().enabled )) selectedImages.data.length = 0;
	}

}
