import { Component } from '@angular/core';
import { GetGlobalActionMenuChoicesService }
	from './global-action-menu-services-module/get-global-action-menu-choices.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-services-module/global-action-menu-choices-executor.service';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [getChoices]="getChoices"
					 [specificChoicesExecutor]="specificChoicesExecutor"
		>
		</action-menu>
	`
})
export class GlobalActionMenuComponent {

	constructor(
		public getChoices: GetGlobalActionMenuChoicesService,
		public specificChoicesExecutor: GlobalActionMenuChoicesExecutorService
	) {
	}

}
