import { Component, Input } from '@angular/core';
import { ProgressBarContextComponent }
	from '@abstract-components/progress-bar-context.abstract.component';
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
