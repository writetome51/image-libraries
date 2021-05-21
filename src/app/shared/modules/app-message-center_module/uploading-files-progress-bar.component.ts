import { Component } from '@angular/core';
import { UploadingFilesProgressData } from '@runtime-state-data/uploading-files-progress.data';
import { AppProgressBarComponent }
	from '@modules/app-message-center_module/app-progress-bar.abstract.component';


@Component({
	selector: 'uploading-files-progress-bar',
	template: `
		<progress-bar *ngIf="progress.percentageComplete > 0"
			[percentageComplete]="progress.percentageComplete"  [label]="'Uploading files: '"
		></progress-bar>
	`
})
export class UploadingFilesProgressBarComponent extends AppProgressBarComponent {

	progress = UploadingFilesProgressData;

}
