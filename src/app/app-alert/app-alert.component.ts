import { Component } from '@angular/core';
import { AlertData } from '../shared/data/runtime-state/static-classes/alert.data';


@Component({
	selector: 'app-alert',
	templateUrl: './app-alert.component.html',
	styles: [`.fixed-alert { display: block; position: fixed; margin: auto; width: 96%; z-index: 1000;}`]
})
export class AppAlertComponent {

	alert = AlertData;


	closeMessage() {
		this.alert.clear();
	}

}
