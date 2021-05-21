import { Component, Input } from '@angular/core';


@Component({
	selector: 'progress-bar',
	template: `
		<div class="app-progress-bar" [style.width]="width">
			<span *ngIf="context.label">{{context.label}}</span>
			<span>{{context.percentageComplete}} %</span>
		</div>
	`,
	styles: [
		`.app-progress-bar {
			width: 1px; /* necessary? */
			text-align: left;
			padding-left: 10px;
			position: relative;
			height: 25px;
			line-height: 25px; /* So text height will fill bar height */
			background-color: #337ab7;
			color: white;
		}`
	]
})
export class ProgressBarComponent {

	@Input() context: { percentageComplete: number, label?: string };


	get width(): string {
		return this.context.percentageComplete + '%';
	}

}
