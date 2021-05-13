import { Component, Input } from '@angular/core';
import { BackgroundExecutionStatusData }
	from '@runtime-state-data/background-execution-status.data';


@Component({
	selector: 'images-loader',
	template: `
		<ng-container clearExecutionStatusOnDestroy [executionStatus]="executionStatus">
			<header><h2>{{heading}}</h2></header>

			<big-loading-spinner *ngIf="executionStatus.waiting"></big-loading-spinner>

			<ng-content *ngIf="!(executionStatus.waiting)"></ng-content>  <!-- images -->
		</ng-container>
	`,
})
export class ImagesLoaderComponent {

	@Input() heading: string;

	executionStatus = BackgroundExecutionStatusData;

}
