import { OnInit } from '@angular/core';
import { ClearAlertOnDestroyComponent } from './clear-alert-on-destroy.component';
import { ClearFormDataService as clearFormData } from './services/clear-form-data.service';


export abstract class ClearFormOnInitAndAlertOnDestroyComponent extends ClearAlertOnDestroyComponent
	implements OnInit {

	ngOnInit(): void {
		clearFormData.go();
	}

}
