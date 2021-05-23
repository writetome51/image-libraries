import { Component } from '@angular/core';
import { UploadingFilesProgressData } from '@runtime-state-data/uploading-files-progress.data';
import { ProgressBarContextComponent }
	from '@modules/horizontal-progress-bar_module/progress-bar-context.abstract.component';


@Component({
	selector: 'uploading-files-progress-bar',
	template: `
		<app-horizontal-progress-bar [progress]="progress" [label]="label">
		</app-horizontal-progress-bar>
	`
})
export class UploadingFilesProgressBarComponent extends ProgressBarContextComponent {

	progress = UploadingFilesProgressData;
	label = 'Uploading files: ';

}
