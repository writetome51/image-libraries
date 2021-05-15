import { Component, Input } from '@angular/core';
import { BackgroundExecutionStatusData }
	from '@runtime-state-data/background-execution-status.data';
import { Waiter } from '@interfaces/waiter.interface';


@Component({
	selector: 'loading-content-section',
	template: `
		<ng-container clearExecutionStatusOnDestroy [executionStatus]="loadingStatus">
			<header><h2>{{heading}}</h2></header>

			<big-loading-spinner *ngIf="loadingStatus.waiting"></big-loading-spinner>

			<ng-content *ngIf="!(loadingStatus.waiting)"></ng-content>
		</ng-container>
	`,
})
export class LoadingContentSectionComponent {

	@Input() heading: string;

	loadingStatus: Waiter = BackgroundExecutionStatusData;

}
