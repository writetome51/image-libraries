import { Component, Input } from '@angular/core';
import { ProgressBarContextDirective }
	from '@app/shared/abstract-directives/progress-bar-context.abstract.directive';
import { Progress } from '@interfaces/progress.interface';


@Component({
	selector: 'app-horizontal-progress-bar',
	template: `
		<horizontal-progress-bar *ngIf="percentageComplete > 0" [context]="this">
		</horizontal-progress-bar>
	`
})
export class AppHorizontalProgressBarComponent extends ProgressBarContextDirective {

	@Input() progress: Progress;
	@Input() label = '';

}
