import { Component, Input } from '@angular/core';
import { Waiter } from '@interfaces/waiter.interface';


@Component({
	selector: 'loading-content-section',
	template: `
		<ng-container setWaitingToFalseOnDestroy [waiter]="loadingStatus">
			<header><h2>{{heading}}</h2></header>

			<big-loading-spinner *ngIf="loadingStatus.waiting"></big-loading-spinner>

			<ng-content *ngIf="!(loadingStatus.waiting)"></ng-content>
		</ng-container>
	`,
})
export class LoadingContentSectionComponent {

	@Input() heading: string;

	@Input() loadingStatus: Waiter;

}
