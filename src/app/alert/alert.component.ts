import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';


@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styles: [`.fixed-alert { display: block; position: fixed; margin: auto; width: 96%;}`]
})
export class AlertComponent {

	alert = AlertService;


	closeMessage() {
		this.alert.clear();
	}

}
