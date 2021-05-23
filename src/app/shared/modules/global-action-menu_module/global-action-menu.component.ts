import { Component } from '@angular/core';
import { GetGlobalActionMenuChoicesService } from './get-global-action-menu-choices.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-choices-executor_service/global-action-menu-choices-executor.service';


@Component({
	selector: 'global-action-menu',
	template: `
		<action-menu [getChoices]="getChoices" [specificChoicesExecutor]="specificChoicesExecutor">
		</action-menu>
	`
})
export class GlobalActionMenuComponent {

	constructor(
		public getChoices: GetGlobalActionMenuChoicesService,
		public specificChoicesExecutor: GlobalActionMenuChoicesExecutorService
	) {}

}
