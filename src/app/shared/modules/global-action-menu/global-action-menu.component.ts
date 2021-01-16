import { Component } from '@angular/core';
import { GlobalActionMenuChoicesManagerService }
	from './global-action-menu-choices-manager.service';
import { GlobalActionMenuChoicesProcessorService }
	from './global-action-menu-choices-processor.service';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [choicesManager]="choicesManager" [specificChoicesExecutor]="choicesProcessor">
		</action-menu>
	`
})
export class GlobalActionMenuComponent {

	constructor(
		public choicesManager: GlobalActionMenuChoicesManagerService,
		public choicesProcessor: GlobalActionMenuChoicesProcessorService
	) {
	}

}
