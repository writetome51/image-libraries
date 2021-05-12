import { Component, Input } from '@angular/core';
import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';


@Component({
	selector: 'images-loader',
	template: `
		<header><h2>{{heading}}</h2></header>

		<big-loading-spinner *ngIf="loading"></big-loading-spinner>

		<ng-content *ngIf="!(loading)"></ng-content>  <!-- images -->
	`,
})
export class ImagesLoaderComponent {

	@Input() heading: string;


	get loading(): boolean {
		return executionStatus.waiting;
	}


}
