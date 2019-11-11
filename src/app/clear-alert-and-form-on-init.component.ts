import { AlertService as alert } from './services/alert.service';
import { ClearFormDataService as clearFormData } from './services/user/clear-form-data.service';
import { OnInit } from '@angular/core';


export abstract class ClearAlertAndFormOnInitComponent implements OnInit {

	ngOnInit() {
		alert.clear();
		clearFormData.go();
	}

}
