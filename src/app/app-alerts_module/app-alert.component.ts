import { Component, Input } from '@angular/core';
import { AlertsService } from '@services/alerts.service';
import { Alert } from '@interfaces/alert.interface';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';


@Component({
	selector: 'app-alert',
	template: `
		<div class="alert fixed-alert fixed-overlay" (click)="doNothing($event)"
			 [class.alert-danger]="data.isError"
			 [class.alert-success]="!(data.isError)"
			 [class.alert-dismissible]="true"
		>
			<span class="close" data-dismiss="alert" aria-label="close"
				  (click)="clear($event, index)"
			>
				<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
			</span>

			<strong>{{data.message}}</strong>
		</div>
	`,
	styles: [`.fixed-alert { margin: auto; width: 96%; }`]
})
export class AppAlertComponent extends HasDataInputComponent<Alert> {

	@Input() index: number;

	alerts = AlertsService;


	doNothing(event) {
		event.stopPropagation();
	}


	clear(event, index) {
		event.stopPropagation();
		this.alerts.clearAlert(index);
	}

}
