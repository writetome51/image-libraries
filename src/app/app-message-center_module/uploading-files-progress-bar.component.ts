import { Component } from '@angular/core';
import { UploadingFilesProgressData } from '@runtime-state-data/uploading-files-progress.data';
import { ProgressBarContextDirective }
	from '@app/shared/abstract-directives/progress-bar-context.abstract.directive';


@Component({
	selector: 'uploading-files-progress-bar',
	template: `
		<app-horizontal-progress-bar [progress]="progress" [label]="label">
		</app-horizontal-progress-bar>
	`
})
export class UploadingFilesProgressBarComponent extends ProgressBarContextDirective {

	progress = UploadingFilesProgressData;
	label = 'Uploading files: ';

}
