import { Component } from '@angular/core';
import { DeletingAllUserFilesProgressData }
	from '@runtime-state-data/deleting-all-user-files-progress.data';
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

	progress = DeletingAllUserFilesProgressData;
	label = 'Deleting files: ';

}
