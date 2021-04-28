import { Directive, OnDestroy } from '@angular/core';
import { AlertsService as alerts } from '@services/alerts.service';


@Directive({
	selector: '[clearAlertsOnDestroy]'
})
export class ClearAlertsOnDestroyDirective implements OnDestroy {

	ngOnDestroy(): void {
		alerts.clearAll();
	}

}
