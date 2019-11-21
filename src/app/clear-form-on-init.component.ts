import { ClearFormDataService as clearFormData } from './services/clear-form-data.service';
import { OnInit } from '@angular/core';


export abstract class ClearFormOnInitComponent implements OnInit {

	ngOnInit() {
		clearFormData.go();
	}

}
