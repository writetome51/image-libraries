import { ClickStartDataProcessComponent }
	from '@abstract-components/click-start-data-process.component';
import { Component, Input } from '@angular/core';
import { not } from '@writetome51/not';


@Component({
	selector: 'start-data-process-list-item',
	template: `
		<div (click)="runClickHandler($event)">
			<ng-content></ng-content>

			<tiny-loading-spinner [class.invisible]="hideLoadingSpinner">
			</tiny-loading-spinner>

			<!--   When process finished, have spinner replaced by checkmark. That checkmark
			 stays there as long as the dropdown list stays open.
			 -->
			<span *ngIf="processed" class="glyphicon glyphicon-ok"></span>
		</div>
	`
})
export class StartDataProcessListItemComponent extends ClickStartDataProcessComponent {

	@Input() processed = false;


	get hideLoadingSpinner(): boolean {
		return not(this.clicked && this.processingStatus.waiting);
	}

}
