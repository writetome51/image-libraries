import { Component } from '@angular/core';
import { StartDataProcessElementComponent }
	from '../../abstract-components/start-data-process-element.component';


@Component({
	selector: 'start-data-process-list-item',
	template: `
		<div class="content-container" (click)="runClickHandler($event)">

			<ng-content></ng-content>
			<tiny-loading-spinner *ngIf="clicked && operationStatus.waiting"></tiny-loading-spinner>

		</div>
	`
})
export class StartDataProcessListItemComponent extends StartDataProcessElementComponent {
}
