import { Component } from '@angular/core';
import { LogoutProcessorService }
	from '../services/data-operation-processor/logout-processor.service';
import { LocalSessionIDService }
	from '../services/authentication/local-session-id.service';
import { PerformAppDataOperationService } from '../services/perform-app-data-operation.service';


@Component({
	selector: 'inner-app-container',
	templateUrl: './inner-app-container.component.html'
})
export class InnerAppContainerComponent {

	title = 'Image Libraries';


	constructor(
		private __logoutProcessor: LogoutProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService,
		private __localSessionID: LocalSessionIDService,
	) {
	}


	get sessionIDExists() {
		return (this.__localSessionID.get().length > 0);
	}


	async logout() {
		await this.__performAppDataOperation.go(this.__logoutProcessor);
	}

}
