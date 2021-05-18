import { Component } from '@angular/core';
import { AlertsService } from '@services/alerts.service';


@Component({
	selector: 'app-alerts',
	template: `
		<div class="modal-overlay" (click)="alerts.clearAll()">
			<app-alert *ngFor="let alert of alerts.get(); let i = index" [data]="alert" [index]="i">
			</app-alert>
		</div>
	`
})
export class AppAlertsComponent {

	alerts = AlertsService;

}
