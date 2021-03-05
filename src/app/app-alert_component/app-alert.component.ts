import { Component } from '@angular/core';
import { AlertService } from '@services/alert.service';


@Component({
	selector: 'app-alert',
	templateUrl: './app-alert.component.html',
	styles: [`
		.fixed-alert {
			display: block; position: fixed; margin: auto; width: 96%; z-index: 1000;
		}
	`]
})
export class AppAlertComponent {

	alert = AlertService;


	closeMessage() {
		this.alert.clear();
	}

}
