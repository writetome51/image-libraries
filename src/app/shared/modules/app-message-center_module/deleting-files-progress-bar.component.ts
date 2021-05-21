import { Component } from '@angular/core';
import { DeletingAllUserFilesProgressData }
	from '@runtime-state-data/deleting-all-user-files-progress.data';
import { ProgressBarContextComponent } from './progress-bar-context.abstract.component';


@Component({
	selector: 'deleting-files-progress-bar',
	template: `<progress-bar *ngIf="percentageComplete > 0" [context]="this"></progress-bar>`
})
export class DeletingFilesProgressBarComponent extends ProgressBarContextComponent {

	progress = DeletingAllUserFilesProgressData;
	label = 'Deleting files: ';

}
