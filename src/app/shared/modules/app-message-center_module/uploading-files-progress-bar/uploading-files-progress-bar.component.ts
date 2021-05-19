import { Component } from '@angular/core';
import { UploadingFilesProgressData } from '@runtime-state-data/uploading-files-progress.data';


@Component({
	selector: 'uploading-files-progress-bar',
	template: `
		<progress-bar *ngIf="progress.percentageComplete > 0"
			[percentageComplete]="progress.percentageComplete"  [label]="'Uploading files: '"
		></progress-bar>
	`
})
export class UploadingFilesProgressBarComponent {

	progress = UploadingFilesProgressData;

}
