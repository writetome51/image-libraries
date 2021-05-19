import { Component, Input } from '@angular/core';
import { AlertsService } from '@services/alerts.service';
import { Alert } from '@interfaces/alert.interface';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';


@Component({
	selector: 'app-alert',
	template: `
		<div class="alert app-alert static-block-overlay" (click)="clearAlert(index, $event)"
			 [class.alert-danger]="data.isError"
			 [class.alert-success]="!(data.isError)"
			 [class.alert-dismissible]="true"
		>
			<strong>{{data.message}}</strong>
		</div>
	`,
	styles: [`.app-alert { margin: auto; width: 96%; }`]
})
export class AppAlertComponent extends HasDataInputComponent<Alert> {

	@Input() index: number;

	alerts = AlertsService;


	clearAlert(index, event: Event) {
		event.stopPropagation();
		this.alerts.clearAlert(index);
	}

}
