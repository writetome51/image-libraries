import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';


@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html'
})
export class AlertComponent {

	alert = AlertService;


	closeMessage() {
		this.alert.clear();
	}

}
