import { Injectable } from '@angular/core';
import { attachNewPrefix } from './attach-prefix.functions';
import { PasswordInputService } from './password-input.service';


@Injectable({providedIn: 'root'})

export class NewPasswordInputService extends PasswordInputService {

	constructor() {
		super();
		attachNewPrefix(this);
	}

}
