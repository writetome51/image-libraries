import { Component } from '@angular/core';
import { LogoutProcessorService }
	from '../services/data-operation-processor/logout-processor.service';
import { LocalSessionIDService }
	from '../services/authentication/local-session-id.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'inner-app-container',
	templateUrl: './inner-app-container.component.html'
})
export class InnerAppContainerComponent {


	title = 'Image Libraries';


	constructor(
		private __logoutProcessor: LogoutProcessorService,
		private __localSessionID: LocalSessionIDService,
		private __dataOperationStatus: DataOperationStatusService
	) {
	}


	get sessionIDExists() {
		return (this.__localSessionID.get().length > 0);
	}


	async logout() {
		this.__dataOperationStatus.waitingForResult = true;
		await this.__logoutProcessor.process();
		this.__dataOperationStatus.waitingForResult = false;
	}


}
