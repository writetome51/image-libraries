import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager_service/global-action-menu-choices-manager.service';
import { GlobalActionMenuServicesModule } from './global-action-menu-services.module';
import { ImageSelectorService } from '@services/image-selector.service';
import { Injectable } from '@angular/core';
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
