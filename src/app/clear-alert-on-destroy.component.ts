import { OnDestroy } from '@angular/core';
import { AlertData as alert } from './data/alert.data';


export abstract class ClearAlertOnDestroyComponent implements OnDestroy {

	ngOnDestroy(): void {
		alert.clear();
	}

}
