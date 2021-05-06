import { Component, Input } from '@angular/core';
import { AlertsService } from '@services/alerts.service';
import { Alert } from '@interfaces/alert.interface';


@Component({
	selector: 'app-alert',
	template: `
		<div class="alert fixed-alert fixed-overlay"
			 [class.alert-danger]="data.isError"
			 [class.alert-success]="!(data.isError)"
			 [class.alert-dismissible]="true"
		>
			<span class="close" data-dismiss="alert" aria-label="close"
				  (click)="alerts.clearAlert(index)"
			>
				<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
			</span>

			<strong>{{data.message}}</strong>
		</div>
	`,
	styles: [`.fixed-alert { margin: auto; width: 96%; }`]
})
export class AppAlertComponent {

	@Input() data: Alert;
	@Input() index: number;

	alerts = AlertsService;

}
