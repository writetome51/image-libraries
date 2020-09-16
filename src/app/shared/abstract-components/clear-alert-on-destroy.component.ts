import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { OnDestroy } from '@angular/core';


export abstract class ClearAlertOnDestroyComponent implements OnDestroy {

	ngOnDestroy(): void {
		alert.clear();
	}

}
