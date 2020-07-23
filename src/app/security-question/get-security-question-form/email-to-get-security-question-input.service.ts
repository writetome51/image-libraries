import { Injectable } from '@angular/core';
import { EmailInputService } from '../../../shared/services/validating-input/email-input.service';
import { CurrentUserData }
	from '../../../../data-structures/runtime-state-data/static-classes/current-user.data';


@Injectable({providedIn: 'root'})

export class EmailToGetSecurityQuestionInputService extends EmailInputService {

	constructor() {
		super();
		this.data.prompt = `Enter email to receive security question:`;
		this.data.objectToBind = CurrentUserData;
	}

}
