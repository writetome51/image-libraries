import { Injectable } from '@angular/core';
import { attachCurrentPrefix } from './attach-prefix.functions';
import { PasswordInputService } from './password-input.service';


@Injectable({providedIn: 'root'})

export class CurrentPasswordInputService extends PasswordInputService {

	constructor() {
		super();
		attachCurrentPrefix(this);
	}

}
