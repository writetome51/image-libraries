import { Component, HostListener } from '@angular/core';
import { AlertService } from './services/alert.service';
import { CurrentUserService } from './services/user/current-user.service';
import { ClearAlertAndFormOnInitComponent } from './clear-alert-and-form-on-init.component';
import { LocalSessionIDService } from './services/authentication/local-session-id.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent extends ClearAlertAndFormOnInitComponent {

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
		__alert: AlertService,
		__currentUser: CurrentUserService
	) {
		super(__alert, __currentUser);
	}

}
