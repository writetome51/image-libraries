import { Component, Input } from '@angular/core';


@Component({
	selector: 'progress-bar',
	template: `
		<div class="app-progress-bar" [style.width]="width">
			{{label}} <span>{{percentageComplete}} %</span>
		</div>
	`,
	styles: [
		`.app-progress-bar {
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
