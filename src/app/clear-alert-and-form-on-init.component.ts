import { AlertService as alert } from './services/alert.service';
import { CurrentUserService } from './services/user/current-user.service';
import { OnInit } from '@angular/core';


export abstract class ClearAlertAndFormOnInitComponent implements OnInit {

	constructor(
		private __currentUser: CurrentUserService
	) {
	}


	ngOnInit() {
		alert.clear();
		this.__currentUser.clearFormProperties();
	}

}
