import { Component } from '@angular/core';
import { DeletingAllUserImagesProgressData }
	from '@runtime-state-data/deleting-all-user-images-progress.data';


@Component({
	selector: 'deleting-files-progress-bar',
	template: `
		<progress-bar *ngIf="progress.percentageComplete > 0"
			[percentageComplete]="progress.percentageComplete"  [label]="'Deleting files: '"
		></progress-bar>
	`
})
export class DeletingFilesProgressBarComponent {

	progress = DeletingAllUserImagesProgressData;

}
