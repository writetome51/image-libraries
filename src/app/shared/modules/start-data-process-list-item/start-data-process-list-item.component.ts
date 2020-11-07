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

			<checkmark *ngIf="showCheck"></checkmark>
		</div>
	`,
	styles: ['checkmark { position: absolute; right: 8px; bottom: 10px;}']
})
export class StartDataProcessListItemComponent extends ClickStartDataProcessComponent {

	@Input() checked = false;


	get showCheck() {
		return (this.hideLoadingSpinner && this.checked);
	}


	get hideLoadingSpinner(): boolean {
		return not(this.clicked && this.processingStatus.waiting);
	}

}
