import { Injectable } from '@angular/core';
import { attachCurrentPrefix } from './attach-prefix.functions';
import { PasswordInputServiceCopy } from './password-input.service copy';


@Injectable({providedIn: 'root'})

export class CurrentPasswordInputServiceCopy extends PasswordInputServiceCopy {

	constructor() {
		super();
		attachCurrentPrefix(this);
	}

}
