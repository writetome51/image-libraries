import { Component, Input } from '@angular/core';
import { DeletingFilesProgressData }
	from '@runtime-state-data/deleting-files-progress.data';
import { ProgressBarContextComponent }
	from '@modules/horizontal-progress-bar_module/progress-bar-context.abstract.component';
import { Progress } from '@interfaces/progress.interface';


@Component({
	selector: 'app-horizontal-progress-bar',
	template: `
		<horizontal-progress-bar *ngIf="percentageComplete > 0" [context]="this">
		</horizontal-progress-bar>
	`
})
export class AppHorizontalProgressBarComponent extends ProgressBarContextComponent{

	@Input() progress: Progress;
	@Input() label = '';

}
