import { Component } from '@angular/core';
import { LogoutProcessorService } from './services/data-operation-processor/logout-processor.service';
import { PerformDataOperationService as performDataOperation }
	from './services/perform-data-operation.service';


@Component({
	selector: 'logout-button',
	template: `<button type="button" (click)="logout()">Sign Out</button>`
})
export class LogoutButtonComponent {

	constructor(private __logoutProcessor: LogoutProcessorService) {
	}


	async logout() {
		await performDataOperation.go(this.__logoutProcessor);
	}

}
