import { Component } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';


@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html'
})
export class AlertComponent {

	alert = alert;


	closeMessage() {
		alert.clear();
	}

}
