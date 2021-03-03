import { Directive, OnDestroy } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';


@Directive({
	selector: '[clearAlertOnDestroy]'
})
export class ClearAlertOnDestroyDirective implements OnDestroy {

	ngOnDestroy(): void {
		alert.clear();
	}

}
