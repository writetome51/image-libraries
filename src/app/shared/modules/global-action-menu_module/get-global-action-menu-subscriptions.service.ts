import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager.service';
import { ImageSelectorService } from '@services/image-selector.service';
import { Injectable } from '@angular/core';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu_module/global-action-menu-services.module';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Unsubscribable } from 'rxjs';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GetGlobalActionMenuSubscriptionsService implements IDoThis {

	constructor(
		public menuChoicesManager: GlobalActionMenuChoicesManagerService,
		public imageSelector: ImageSelectorService
	) {}


	go(): Unsubscribable[] {
		const imageSelectorSubscription = this.imageSelector.selectionState$.subscribe(
			(state) => this.menuChoicesManager.manage(state)
		);
		return [
			imageSelectorSubscription
		];
	}

}
