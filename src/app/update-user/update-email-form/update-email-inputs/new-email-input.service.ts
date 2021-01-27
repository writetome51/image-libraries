import { EmailInputService } from '@validating-input/email-input.service';
import { Injectable } from '@angular/core';
import { PrefixLabel_to_ValidatingInputService }
	from '@validating-input/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})
export class __NewEmailInputService extends EmailInputService {
}

@Injectable({providedIn: 'root'})
export class NewEmailInputService extends __NewEmailInputService {
}
