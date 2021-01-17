import { Component } from '@angular/core';
import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-choices-executor.service';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [choicesManager]="choicesManager" [specificChoicesExecutor]="choicesExecutor">
		</action-menu>
	`
})
export class GlobalActionMenuComponent {

	constructor(
		public choicesManager: GlobalActionMenuChoicesManagerService,
		public choicesExecutor: GlobalActionMenuChoicesExecutorService
	) {
	}

}
