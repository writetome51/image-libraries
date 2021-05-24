import { Component } from '@angular/core';
import { HasContextInputComponent }
	from '@abstract-components/has-context-input.abstract.component';
import { ProgressBarContextComponent } from './progress-bar-context.abstract.component';


@Component({
	selector: 'horizontal-progress-bar',
	template: `
		<div class="app-horizontal-progress-bar" [style.width]="width">
			<span *ngIf="context.label">{{context.label}}</span>
			<span>{{context.percentageComplete}} %</span>
		</div>
	`,
	styles: [
		`.app-horizontal-progress-bar {
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
export class HorizontalProgressBarComponent
	extends HasContextInputComponent<ProgressBarContextComponent> {

	get width(): string {
		return this.context.percentageComplete + '%';
	}

}
