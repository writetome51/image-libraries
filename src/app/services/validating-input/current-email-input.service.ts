import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { CurrentUserService } from '../user/current-user.service';
import { attachCurrentPrefix } from './attach-prefix.functions';


@Injectable({providedIn: 'root'})

export class CurrentEmailInputService extends EmailInputService {

	constructor(
		__currentUser: CurrentUserService
	) {
		super(__currentUser);
		attachCurrentPrefix(this);
	}

}
