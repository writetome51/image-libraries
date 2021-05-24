import { Component } from '@angular/core';
import { AlertsService } from '@services/alerts.service';


@Component({
	selector: 'app-message-center',
	template: `
		<div class="fixed-overlay">
			<app-alerts (click)="clearAlerts($event)"></app-alerts>

			<uploading-files-progress-bar></uploading-files-progress-bar>

			<deleting-files-progress-bar></deleting-files-progress-bar>
		</div>
	`,

	styles: [
		`.fixed-overlay {
			position: fixed;
			z-index: 1000;
			padding: 100px;
			left: 0;
			top: 0;
			width: 100%; height: 100%;
			overflow: auto;
			background-color: rgb(0, 0, 0);
			background-color: rgba(0, 0, 0, 0.4);
		}`
	]
})
export class AppMessageCenterComponent {

	alerts = AlertsService;


	clearAlerts(event) {
		event.stopPropagation();
		this.alerts.clearAll();
	}

}
