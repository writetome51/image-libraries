import { OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';


export abstract class ClearAlertOnInitComponent implements OnInit {

	constructor(private __alert: AlertService) {
	}


	ngOnInit() {
		this.__alert.clear();
	}

}
