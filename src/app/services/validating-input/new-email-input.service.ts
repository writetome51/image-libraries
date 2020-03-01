import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { PrefixLabel_to_ValidatingInputService }
	from './prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})

export class __NewEmailInputService extends EmailInputService {
}


@Injectable({providedIn: 'root'})

export class NewEmailInputService extends __NewEmailInputService {
}
