import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { PrefixLabel_to_ValidatingInputService }
	from './prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@Injectable({providedIn: 'root'})
@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})

export class NewEmailInputService extends EmailInputService {
}
