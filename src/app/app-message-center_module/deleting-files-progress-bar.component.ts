import { Component } from '@angular/core';
import { DeletingFilesProgressData }
	from '@runtime-state-data/deleting-files-progress.data';
import { ProgressBarContextDirective }
	from '@app/shared/abstract-directives/progress-bar-context.abstract.directive';


@Component({
	selector: 'deleting-files-progress-bar',
	template: `
		<app-horizontal-progress-bar [progress]="progress" [label]="label">
		</app-horizontal-progress-bar>
	`
})
export class DeletingFilesProgressBarComponent extends ProgressBarContextDirective {

	readonly progress = DeletingFilesProgressData;
	readonly label = 'Deleting files: ';

}
