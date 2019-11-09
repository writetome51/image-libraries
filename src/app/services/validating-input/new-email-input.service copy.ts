import { Injectable } from '@angular/core';
import { attachNewPrefix } from './attach-prefix.functions';
import { EmailInputServiceCopy } from './email-input.service copy';


@Injectable({providedIn: 'root'})

export class NewEmailInputServiceCopy extends EmailInputServiceCopy {

	constructor() {
		super();
		attachNewPrefix(this);
	}

}
