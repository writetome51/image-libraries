import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';


@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html'
})
export class AlertComponent {


	constructor(public alert: AlertService) {
	}


	closeMessage() {
		this.alert.clear();
	}


}
