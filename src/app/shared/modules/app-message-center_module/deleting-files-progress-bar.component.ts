import { Component } from '@angular/core';
import { DeletingAllUserFilesProgressData }
	from '@runtime-state-data/deleting-all-user-files-progress.data';
import { AppProgressBarComponent } from './app-progress-bar.abstract.component';


@Component({
	selector: 'deleting-files-progress-bar',
	template: `
		<progress-bar *ngIf="progress.percentageComplete > 0"
			[percentageComplete]="progress.percentageComplete"  [label]="'Deleting files: '"
		></progress-bar>
	`
})
export class DeletingFilesProgressBarComponent extends AppProgressBarComponent {

	progress = DeletingAllUserFilesProgressData;

}
