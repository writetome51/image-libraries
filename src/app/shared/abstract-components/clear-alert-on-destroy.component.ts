import { OnDestroy } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';


export abstract class ClearAlertOnDestroyComponent implements OnDestroy {

	ngOnDestroy(): void {
		alert.clear();
	}

}
