import { Component } from '@angular/core';
import { AlertService } from '@services/alert.service';


@Component({
	selector: 'app-alert',
	template: `
		<div class="alert fixed-alert"
			 [class.alert-danger]="alert.error"
			 [class.alert-success]="alert.success"
			 [class.alert-dismissible]="true"
		>
			<span class="close" data-dismiss="alert" aria-label="close" (click)="alert.clear()">
				<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
			</span>

			<strong>{{alert.data}}</strong>
		</div>
	`,
	styles: [`
		.fixed-alert {
			display: block; position: fixed; margin: auto; width: 96%; z-index: 1000;
		}
	`]
})
export class AppAlertComponent {

	alert = AlertService;

}
