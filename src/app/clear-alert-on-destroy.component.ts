import { OnDestroy } from '@angular/core';
import { AlertService as alert } from './services/alert.service';


export abstract class ClearAlertOnDestroyComponent implements OnDestroy {

	ngOnDestroy(): void {
		alert.clear();
	}

}
