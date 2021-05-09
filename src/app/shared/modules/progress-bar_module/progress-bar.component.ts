import { Component, Input } from '@angular/core';
import { Progress } from '@interfaces/progress.interface';


@Component({
	selector: 'progress-bar',
	template: `
		<div class="fixed-overlay progress-bar" [style.width]="width">
			{{label}} <span>{{progress.percentageComplete}} %</span>
		</div>
	`,
	styles: [
		`.progress-bar {
			width: 1px; /* necessary? */
			height: 25px; line-height: 25px; /* So text height will fill bar height */
			text-align: left;
			padding-left: 10px;
		}`
	]
})
export class ProgressBarComponent {

	@Input() progress: Progress;
	@Input() label? = '';


	get width(): string {
		return this.progress.percentageComplete + '%';
	}

}
