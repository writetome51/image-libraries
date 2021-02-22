import { ClickExecuteFunctionComponent }
	from '@abstract-components/click-execute-function.abstract.component';
import { Component } from '@angular/core';
import { not } from '@writetome51/not';


@Component({
	selector: 'click-execute-function-div',
	template: `
		<div (click)="execute($event)">
			<ng-content></ng-content>

			<tiny-loading-spinner [class.invisible]="hideLoadingSpinner"></tiny-loading-spinner>
		</div>
	`
})
export class ClickExecuteFunctionDivComponent extends ClickExecuteFunctionComponent {

	get hideLoadingSpinner(): boolean {
		return not(this.clicked && this.executionStatus.waiting);
	}

}
