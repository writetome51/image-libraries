import { Injectable } from '@angular/core';
import { attachCurrentPrefix } from './attach-prefix.functions';
import { EmailInputService } from './email-input.service';


@Injectable({providedIn: 'root'})

export class CurrentEmailInputService extends EmailInputService {

	constructor() {
		super();
		attachCurrentPrefix(this);
	}

}
