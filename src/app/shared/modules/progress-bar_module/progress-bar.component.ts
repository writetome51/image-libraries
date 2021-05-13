import { Component, Input } from '@angular/core';
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
			position: fixed;
			width: 1px; /* necessary? */
			height: 25px; line-height: 25px; /* So text height will fill bar height */
			text-align: left;
			padding-left: 10px;
			background-color: #337ab7; color: white;
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
