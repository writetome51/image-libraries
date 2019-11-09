import { Injectable } from '@angular/core';
import { attachNewPrefix } from './attach-prefix.functions';
import { PasswordInputServiceCopy } from './password-input.service copy';


@Injectable({providedIn: 'root'})

export class NewPasswordInputServiceCopy extends PasswordInputServiceCopy {

	constructor() {
		super();
		attachNewPrefix(this);
	}

}
