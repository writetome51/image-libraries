import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { PrefixLabel_to_ValidatingInputService }
	from './prefix-label-to-validating-input-service.decorator';


@Injectable({providedIn: 'root'})
@PrefixLabel_to_ValidatingInputService({prefix: 'current'})

export class CurrentEmailInputService extends EmailInputService {
}
