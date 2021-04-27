import { Component } from '@angular/core';
import { AlertsService } from '@services/alerts.service';


@Component({
	selector: 'app-alerts',
	template: `<app-alert *ngFor="let a of proxy; let i = index" [index]="i"></app-alert>`
})
export class AppAlertsComponent {

	alerts = AlertsService;
	proxy = new Array(this.alerts.count);

}
