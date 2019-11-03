import { CurrentUserService } from '../services/user/current-user.service';
import { ClearAlertOnInitComponent } from './clear-alert-on-init.component';
import { OnInit } from '@angular/core';


export abstract class ClearFormAndAlertOnInitComponent extends ClearAlertOnInitComponent
	implements OnInit {

	constructor(
		__alert,
		private __currentUser: CurrentUserService
	) {
		super(__alert);
	}


	ngOnInit() {
		super.ngOnInit();
		this.__currentUser.clearFormProperties();
	}

}
