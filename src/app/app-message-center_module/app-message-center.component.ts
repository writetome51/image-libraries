import { AlertsService } from '@services/alerts.service';
import { Component } from '@angular/core';
import { DeletingFilesProgressData } from '@runtime-state-data/deleting-files-progress.data';
import { ProgressBarData } from '@interfaces/progress-bar-data.interface';
import { UploadingFilesProgressData } from '@runtime-state-data/uploading-files-progress.data';


@Component({
	selector: 'app-message-center',
	template: `
		<div class="fixed-overlay">
			<app-alerts (click)="clearAlerts($event)"></app-alerts>

			<app-horizontal-progress-bars [data]="progressBarsData">
			</app-horizontal-progress-bars>
		</div>
	`,

	styles: [
		`.fixed-overlay {
			position: fixed;
			z-index: 5000;
			padding: 100px;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			overflow: auto;
			background-color: rgb(0, 0, 0);
			background-color: rgba(0, 0, 0, 0.3);
		}`
	]
})
export class AppMessageCenterComponent {

	alerts = AlertsService;

	progressBarsData: ProgressBarData[] = [
		{progress: UploadingFilesProgressData, label: 'Uploading files: '},
		{progress: DeletingFilesProgressData, label: 'Deleting files: '}
	];


	clearAlerts(event) {
		event.stopPropagation();
		this.alerts.clearAll();
	}

}
