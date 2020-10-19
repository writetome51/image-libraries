import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Component, OnDestroy } from '@angular/core';


@Component({
	selector: 'clear-alert-on-destroy-container',
	template: `<ng-content></ng-content>`
})
export class ClearAlertOnDestroyContainerComponent implements OnDestroy {

	ngOnDestroy(): void {
		alert.clear();
	}

}
