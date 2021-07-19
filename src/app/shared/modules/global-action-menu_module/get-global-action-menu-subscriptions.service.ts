import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager_service/global-action-menu-choices-manager.service';
import { GlobalActionMenuServicesModule } from './global-action-menu-services.module';
import { ImagesSelectedStateService } from '@services/images-selected-state.service';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Unsubscribable } from 'rxjs';
import { ImageSelectionEnabledStateService } from './image-selection-enabled-state.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GetGlobalActionMenuSubscriptionsService implements IDoThis {

	constructor(
		public menuChoicesManager: GlobalActionMenuChoicesManagerService,
		public imagesSelectedState$: ImagesSelectedStateService,
		public imageSelectionEnabledState$: ImageSelectionEnabledStateService
	) {}


	go(): Unsubscribable[] {
		const imagesSelectedSubscription = this.imagesSelectedState$.subscribe(
			(state: { imagesSelected: boolean }) => this.menuChoicesManager.manage(state)
		);
		const selectionEnabledSubscription = this.imageSelectionEnabledState$.subscribe(
			(state: { selectionEnabled: boolean }) => this.menuChoicesManager.manage(state)
		);
		return [
			imagesSelectedSubscription,
			selectionEnabledSubscription
		];
	}

}
