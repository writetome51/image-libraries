import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { PrefixLabel_ValidatingInputService }
	from './prefix-label-validating-input-service.decorator';


// is @Injectable necessary, since it was added to parent class?
@Injectable({providedIn: 'root'})
@PrefixLabel_ValidatingInputService({prefix: 'current'})

export class CurrentEmailInputService extends EmailInputService {
}
