import { Component } from '@angular/core';
import { LogoutProcessorService }
	from '../services/authentication/logout-processor/logout-processor.service';
import { SessionIDLocalStorageService }
	from '../services/authentication/session-id-local-storage.service';


@Component({
	selector: 'inner-app-container',
	templateUrl: './inner-app-container.component.html'
})
export class InnerAppContainerComponent {


	title = 'Image Libraries';


	constructor(
		private __logoutProcessor: LogoutProcessorService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	get sessionIDExists() {
		return (this.__sessionIDLocalStorage.get().length > 0);
	}


	async logout() {
		await this.__logoutProcessor.process();
	}


}
