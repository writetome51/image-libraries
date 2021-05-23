import { Component } from '@angular/core';
import { UploadingFilesProgressData } from '@runtime-state-data/uploading-files-progress.data';
import { ProgressBarContextComponent }
	from '@modules/progress-bar_module/progress-bar-context.abstract.component';


@Component({
	selector: 'uploading-files-progress-bar',
	template: `<progress-bar *ngIf="percentageComplete > 0" [context]="this"></progress-bar>`
})
export class UploadingFilesProgressBarComponent extends ProgressBarContextComponent {

	progress = UploadingFilesProgressData;
	label = 'Uploading files: ';

}
