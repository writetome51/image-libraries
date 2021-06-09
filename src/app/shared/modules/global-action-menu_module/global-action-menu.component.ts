import { Component, OnInit } from '@angular/core';
import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-choices-executor_service/global-action-menu-choices-executor.service';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';
import { GetGlobalActionMenuSubscriptionsService }
	from './get-global-action-menu-subscriptions.service';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [menuChoicesManager]="menuChoicesManager"
			[specificChoicesExecutor]="specificChoicesExecutor"
		></action-menu>
	`
})
export class GlobalActionMenuComponent extends UnsubscribeOnDestroyDirective implements OnInit {

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

}
