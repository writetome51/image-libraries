import { ActionMenuContext } from '@interfaces/action-menu-context.interface';
import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-choices-executor_service/global-action-menu-choices-executor.service';
import { GetGlobalActionMenuSubscriptionsService }
	from './get-global-action-menu-subscriptions.service';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


@Component({
	selector: 'global-action-menu',
	template: `<action-menu [context]="this"></action-menu>`
})
export class GlobalActionMenuComponent extends UnsubscribeOnDestroyDirective
	implements ActionMenuContext, OnInit, OnDestroy {

	getChoicesArgs = [];

	constructor(
		public menuChoicesManager: GlobalActionMenuChoicesManagerService,
		public choicesExecutor: GlobalActionMenuChoicesExecutorService,
		private __getSubscriptions: GetGlobalActionMenuSubscriptionsService
	) {
		super();
	}


	ngOnInit() {
		this._subscriptions = this.__getSubscriptions.go();
	}


	ngOnDestroy() {
		super.ngOnDestroy();

		actionMenuChoices.setDefault();
		selectedImages.data.length = 0;
	}

}
