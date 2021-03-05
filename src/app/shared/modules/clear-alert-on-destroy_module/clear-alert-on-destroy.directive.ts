import { Directive, OnDestroy } from '@angular/core';
import { AlertService as alert } from '@services/alert.service';


@Directive({
	selector: '[clearAlertOnDestroy]'
})
export class ClearAlertOnDestroyDirective implements OnDestroy {

	ngOnDestroy(): void {
		alert.clear();
	}

}
