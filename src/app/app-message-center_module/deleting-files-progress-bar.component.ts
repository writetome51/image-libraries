import { Component } from '@angular/core';
import { DeletingFilesProgressData }
	from '@runtime-state-data/deleting-files-progress.data';
import { ProgressBarContextComponent }
	from '@modules/horizontal-progress-bar_module/progress-bar-context.abstract.component';


@Component({
	selector: 'deleting-files-progress-bar',
	template: `
		<app-horizontal-progress-bar [progress]="progress" [label]="label">
		</app-horizontal-progress-bar>
	`
})
export class DeletingFilesProgressBarComponent extends ProgressBarContextComponent {

	readonly progress = DeletingFilesProgressData;
	readonly label = 'Deleting files: ';

}
