import { Component, HostListener } from '@angular/core';
import { AlertService } from './services/alert.service';
import { CurrentUserService } from './services/user/current-user.service';
import { ClearAlertAndFormOnInitComponent } from './clear-alert-and-form-on-init.component';


@Component({
	selector: 'app-root',
	template: `<inner-app-container></inner-app-container>`
})
export class AppComponent extends ClearAlertAndFormOnInitComponent {


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		console.log(event);
	}


	constructor(
		__alert: AlertService,
		__currentUser: CurrentUserService
	) {
		super(__alert, __currentUser);
	}

}
