import { ClickStartDataProcessComponent }
	from '@abstract-components/click-start-data-process.component';
import { Component, Input } from '@angular/core';
import { not } from '@writetome51/not';


@Component({
	selector: 'start-data-process-list-item',
	template: `
		<div (click)="runClickHandler($event)">
			<ng-content></ng-content>

			<tiny-loading-spinner [class.invisible]="hideLoadingSpinner"></tiny-loading-spinner>
		</div>
	`
})
export class StartDataProcessListItemComponent extends ClickStartDataProcessComponent {

	get hideLoadingSpinner(): boolean {
		return not(this.clicked && this.processingStatus.waiting);
	}

}
