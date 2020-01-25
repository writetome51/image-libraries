import { Component } from '@angular/core';
import { AlertData } from '../data/alert.data';


@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html'
})
export class AlertComponent {

	alert = AlertData;


	closeMessage() {
		this.alert.clear();
	}

}
