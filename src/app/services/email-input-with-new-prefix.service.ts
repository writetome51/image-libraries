import { Injectable } from '@angular/core';
import { PrefixLabel_ValidatingInputService }
	from './validating-input/prefix-label-validating-input-service.decorator';
import { EmailInputService } from './validating-input/email-input.service';


@Injectable({providedIn: 'root'})
@PrefixLabel_ValidatingInputService({prefix: 'new', propertyToBind: ''})
export class EmailInputWithNewPrefixService extends EmailInputService {

	log() {
		console.log(this.data.errorMessage);
	}
}
