import { Component, HostListener } from '@angular/core';
import { LogoutProcessorService } from './services/authentication/logout-processor.service';
import { SessionIDLocalStorageService } from './services/authentication/session-id-local-storage.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'Image Libraries';


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		console.log(event);
	}


	get sessionIDExists() {
		return (this.__sessionIDLocalStorage.get().length > 0);
	}


	constructor(
		private __logoutProcessor: LogoutProcessorService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	logout() {
		this.__logoutProcessor.process();
	}


}
