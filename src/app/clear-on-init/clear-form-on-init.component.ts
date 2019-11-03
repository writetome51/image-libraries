import { OnInit } from '@angular/core';
import { CurrentUserService } from '../services/user/current-user.service';


export abstract class ClearFormOnInitComponent implements OnInit {

	constructor(private __currentUser: CurrentUserService) {
	}


	ngOnInit() {
		this.__currentUser.clearFormProperties();
	}

}
