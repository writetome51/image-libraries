import { Injectable } from '@angular/core';
import { attachCurrentPrefix } from './attach-prefix.functions';
import { EmailInputServiceCopy } from './email-input.service copy';


@Injectable({providedIn: 'root'})

export class CurrentEmailInputServiceCopy extends EmailInputServiceCopy {

	constructor() {
		super();
		attachCurrentPrefix(this);
	}

}
