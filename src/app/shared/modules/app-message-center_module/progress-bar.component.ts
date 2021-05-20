import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActiveProgressBarCountData as activeProgressBarCount }
	from '@runtime-state-data/active-progress-bar-count.data';


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
			position: relative;
			height: 25px;
			line-height: 25px; /* So text height will fill bar height */
			background-color: #337ab7;
			color: white;
		}`
	]
})
export class ProgressBarComponent implements OnInit, OnDestroy {

	@Input() percentageComplete: number;
	@Input() label? = '';


	get width(): string {
		return this.percentageComplete + '%';
	}


	ngOnInit() {
		++activeProgressBarCount.data;
	}


	ngOnDestroy() {
		--activeProgressBarCount.data;
	}

}
