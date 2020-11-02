import { GlobalActionMenuChoicesManagerService } from './global-action-menu-choices-manager.service';
import { Component } from '@angular/core';
import { ChoicesProcessorService } from './choices-processor.service';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [choicesManager]="choicesManager" [choicesProcessor]="choicesProcessor">
		</action-menu>
	`
})
export class GlobalActionMenuComponent {

	constructor(
		public choicesManager: GlobalActionMenuChoicesManagerService,
		public choicesProcessor: ChoicesProcessorService
	) {
	}

}
