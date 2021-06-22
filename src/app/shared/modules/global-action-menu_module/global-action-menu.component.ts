import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-choices-executor_service/global-action-menu-choices-executor.service';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';
import { GetGlobalActionMenuSubscriptionsService }
	from './get-global-action-menu-subscriptions.service';
import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [menuChoicesManager]="menuChoicesManager"
			[specificChoicesExecutor]="specificChoicesExecutor"
		></action-menu>
	`
})
export class GlobalActionMenuComponent extends UnsubscribeOnDestroyDirective
	implements OnInit, OnDestroy {

	constructor(
		public menuChoicesManager: GlobalActionMenuChoicesManagerService,
		public specificChoicesExecutor: GlobalActionMenuChoicesExecutorService,
		private __getSubscriptions: GetGlobalActionMenuSubscriptionsService
	) {
		super();
	}


	ngOnInit() {
		this._subscriptions.push(...this.__getSubscriptions.go());
	}


	ngOnDestroy() {
		super.ngOnDestroy();

		actionMenuChoices.setDefault();
		selectedImages.data.length = 0;
	}

}
