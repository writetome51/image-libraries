import { Injectable } from '@angular/core';
import { attachNewPrefix } from './attach-prefix.functions';
import { EmailInputService } from './email-input.service';


@Injectable({providedIn: 'root'})

export class NewEmailInputService extends EmailInputService {

	constructor() {
		super();
		attachNewPrefix(this);
	}

}
