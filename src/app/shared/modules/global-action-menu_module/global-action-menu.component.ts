import { Component } from '@angular/core';
import { GlobalActionMenuChoicesManagerService } from './global-action-menu-choices-manager.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-choices-executor_service/global-action-menu-choices-executor.service';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [menuChoicesManager]="getChoices"
					 [specificChoicesExecutor]="specificChoicesExecutor">
		</action-menu>
	`
})
export class GlobalActionMenuComponent {

	constructor(
		public getChoices: GlobalActionMenuChoicesManagerService,
		public specificChoicesExecutor: GlobalActionMenuChoicesExecutorService
	) {}

}
