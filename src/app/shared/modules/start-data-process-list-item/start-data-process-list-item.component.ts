import { AlertData } from '@runtime-state-data/static-classes/alert.data';
import { ClickStartDataProcessComponent }
	from '@abstract-components/click-start-data-process.component';
import { Component } from '@angular/core';


@Component({
	selector: 'start-data-process-list-item',
	template: `
		<ng-container (click)="runClickHandler($event)">
			<ng-content></ng-content>

			<tiny-loading-spinner *ngIf="clicked && processingStatus.waiting"></tiny-loading-spinner>
			<!--   When process finished, have spinner replaced by checkmark. That checkmark
			 stays there as long as the dropdown list stays open.
			 -->
			<span *ngIf="alert.success"  class="glyphicon glyphicon-ok"></span>
		</ng-container>
	`
})
export class StartDataProcessListItemComponent extends ClickStartDataProcessComponent {

	alert = AlertData;

}
