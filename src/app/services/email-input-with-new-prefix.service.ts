import { Injectable } from '@angular/core';
import { attach_prefix } from './validating-input/attach-prefix.decorator';
import { EmailInputService } from './validating-input/email-input.service';


@Injectable({providedIn: 'root'})
@attach_prefix('new')
export class EmailInputWithNewPrefixService extends EmailInputService{

	log() {
		console.log(this.data.errorMessage);
	}
}
