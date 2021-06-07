import { Component } from '@angular/core';
import { ProgressBarData } from '@interfaces/progress-bar-data.interface';
import { HasDataInputDirective }
	from '@app/shared/abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'app-horizontal-progress-bars',
	template: `
		<app-horizontal-progress-bar *ngFor="let datum of data"
			[progress]="datum.progress"  [label]="datum.label"
		></app-horizontal-progress-bar>
	`
})
export class AppHorizontalProgressBarsComponent
	extends HasDataInputDirective<ProgressBarData[]> {}
