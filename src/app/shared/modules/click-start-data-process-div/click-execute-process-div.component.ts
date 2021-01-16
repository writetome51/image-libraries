import { ClickExecuteFunctionComponent }
	from '@abstract-components/click-execute-function.component';
import { Component } from '@angular/core';
import { not } from '@writetome51/not';


@Component({
	selector: 'click-start-data-process-div',
	template: `
		<div (click)="runClickHandler($event)">
			<ng-content></ng-content>

			<tiny-loading-spinner [class.invisible]="hideLoadingSpinner"></tiny-loading-spinner>
		</div>
	`
})
export class ClickExecuteProcessDivComponent extends ClickExecuteFunctionComponent {

	get hideLoadingSpinner(): boolean {
		return not(this.clicked && this.executionStatus.waiting);
	}

}
