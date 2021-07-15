import { ActionMenuContext } from '@interfaces/action-menu-context.interface';
import { ActionMenuContextDirective }
	from '@abstract-directives/action-menu-context.abstract.directive';
import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager_service/global-action-menu-choices-manager.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-choices-executor_service/global-action-menu-choices-executor.service';
import { GetGlobalActionMenuSubscriptionsService }
	from './get-global-action-menu-subscriptions.service';
import { Unsubscribable } from 'rxjs';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [context]="this"  unsubscribeOnDestroy [subscriptions]="subscriptions">
		</action-menu>
	`
})
export class GlobalActionMenuComponent extends ActionMenuContextDirective
	implements ActionMenuContext, OnInit, OnDestroy {

	subscriptions: Unsubscribable[];


	constructor(
		menuChoicesManager: GlobalActionMenuChoicesManagerService,
		choicesExecutor: GlobalActionMenuChoicesExecutorService,
		private __getSubscriptions: GetGlobalActionMenuSubscriptionsService
	) {
		super(menuChoicesManager, choicesExecutor);
	}


	ngOnInit() {
		this.subscriptions = this.__getSubscriptions.go();
	}


	ngOnDestroy() {
		actionMenuChoices.setDefault();

		// selectedImages.data.length = 0;
	}

}
