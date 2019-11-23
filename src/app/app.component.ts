import { AlertService as alert } from './services/alert.service';
import { Component, HostListener } from '@angular/core';
import { DataOperationStatusService as dataOperationStatus }
	from './services/data-operation-status.service';
import { LocalSessionIDService } from './services/authentication/local-session-id.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'Image Libraries';
	alert = alert;
	dataOperationStatus = dataOperationStatus;


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		//	console.log(event);
	}


	get sessionIDExists() {
		return (this.__localSessionID.get());
	}


	constructor(private __localSessionID: LocalSessionIDService) {
	}

}
