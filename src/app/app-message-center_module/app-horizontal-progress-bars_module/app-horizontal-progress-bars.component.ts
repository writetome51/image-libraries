import { Component } from '@angular/core';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';
import { ProgressBarData } from '@interfaces/progress-bar-data.interface';


@Component({
	selector: 'app-horizontal-progress-bars',
	template: `
		<app-horizontal-progress-bar *ngFor="let datum of data"
			[progress]="datum.progress"  [label]="datum.label"
		></app-horizontal-progress-bar>
	`
})
export class AppHorizontalProgressBarsComponent extends HasDataInputDirective<ProgressBarData[]> {}
