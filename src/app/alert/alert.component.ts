import { Component } from '@angular/core';
import { AlertData } from '../data/alert.data';


@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styles: [`.fixed-alert { display: block; position: fixed; margin: auto; width: 96%;}`]
})
export class AlertComponent {

	alert = AlertData;


	closeMessage() {
		this.alert.clear();
	}

}
