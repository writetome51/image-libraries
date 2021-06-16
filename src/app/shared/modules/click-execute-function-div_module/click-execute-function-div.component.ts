import { ClickExecuteFunctionDirective }
	from '@abstract-directives/click-execute-function.abstract.directive';
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
export class ClickExecuteFunctionDivComponent extends ClickExecuteFunctionDirective {

	get hideLoadingSpinner(): boolean {
		return not(this.clicked && this.executionStatus.waiting);
	}

}
