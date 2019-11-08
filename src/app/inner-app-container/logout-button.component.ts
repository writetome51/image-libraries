import { Component } from '@angular/core';
import { LogoutProcessorService } from '../services/data-operation-processor/logout-processor.service';
import { PerformAppDataOperationService } from '../services/perform-app-data-operation.service';


@Component({
	selector: 'logout-button',
	template: `<button (click)="logout()">Sign Out</button>`
})
export class LogoutButtonComponent {

	constructor(
		private __logoutProcessor: LogoutProcessorService,
		private __performAppDataOperation: PerformAppDataOperationService,
	) {
	}


	async logout() {
		await this.__performAppDataOperation.go(this.__logoutProcessor);
	}

}
