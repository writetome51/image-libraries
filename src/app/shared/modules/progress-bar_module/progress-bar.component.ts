import { Component, Input, OnDestroy } from '@angular/core';
import { Progress } from '@interfaces/progress.interface';


@Component({
	selector: 'progress-bar',
	template: `
		<div class="progress-bar" [style.width]="width">
			{{label}} <span>{{progress.percentageComplete}} %</span>
		</div>
	`,
	styles: [
		`.progress-bar {
			width: 1px; /* necessary? */
			text-align: left;
			padding-left: 10px;
		}`
	]
})
export class ProgressBarComponent implements OnDestroy {

	@Input() progress: Progress;
	@Input() label? = '';


	get width(): string {
		return this.progress.percentageComplete + '%';
	}


	ngOnDestroy() {
		this.progress.percentageComplete = 0;
	}

}
