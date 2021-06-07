import { Component } from '@angular/core';
import { AlertsService } from '@services/alerts.service';


@Component({
	selector: 'app-alerts',
	template: `
		<app-alert *ngFor="let alert of alerts.get(); let i = index"  [data]="alert"
			(click)="clearAlert(i, $event)"
		></app-alert>
	`
})
export class AppAlertsComponent {

	alerts = AlertsService;


	clearAlert(index, event: Event) {
		event.stopPropagation();
		this.alerts.clearAlert(index);
	}

}
