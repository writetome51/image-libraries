import { Component, HostListener } from '@angular/core';
import { LocalSessionIDService } from './services/authentication/local-session-id.service';


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
		return (this.__localSessionID.get());
	}


	constructor(
		private __localSessionID: LocalSessionIDService,
	) {
	}

}
