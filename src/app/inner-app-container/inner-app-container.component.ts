import { Component } from '@angular/core';
import { LogoutProcessorService }
	from '../services/authentication/logout-processor/logout-processor.service';
import { LocalSessionIDService }
	from '../services/authentication/local-session-id.service';


@Component({
	selector: 'inner-app-container',
	templateUrl: './inner-app-container.component.html'
})
export class InnerAppContainerComponent {


	title = 'Image Libraries';


	constructor(
		private __logoutProcessor: LogoutProcessorService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	get sessionIDExists() {
		return (this.__localSessionID.get().length > 0);
	}


	async logout() {
		await this.__logoutProcessor.process();
	}


}
