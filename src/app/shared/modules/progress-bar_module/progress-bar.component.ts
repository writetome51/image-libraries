import { Component, Input } from '@angular/core';


@Component({
	selector: 'progress-bar',
	template: `
		<div class="progress-bar" [style.width]="width">
			{{label}} <span>{{percentageComplete}} %</span>
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
export class ProgressBarComponent {

	@Input() percentageComplete: number;
	@Input() label? = '';


	get width(): string {
		return this.percentageComplete + '%';
	}

}
