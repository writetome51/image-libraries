import { OnDestroy } from '@angular/core';
import { AlertData as alert }
	from '../../../data-structures/runtime-state-data/static-classes/alert.data';


export abstract class ClearAlertOnDestroyComponent implements OnDestroy {

	ngOnDestroy(): void {
		alert.clear();
	}

}
