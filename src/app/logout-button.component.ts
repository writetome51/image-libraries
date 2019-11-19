import { Component } from '@angular/core';
import { LogoutProcessorService } from './services/data-operation-processor/logout-processor.service';
import { PerformAppDataOperationService as performAppDataOperation }
	from './services/perform-app-data-operation.service';


@Component({
	selector: 'logout-button',
	template: `<button type="submit" (click)="logout()">Sign Out</button>`
})
export class LogoutButtonComponent {

	constructor(private __logoutProcessor: LogoutProcessorService) {
	}


	async logout() {
		await performAppDataOperation.go(this.__logoutProcessor);
	}

}
