import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { PrefixLabel_ValidatingInputService } from './prefix-label-validating-input-service.decorator';


@Injectable({providedIn: 'root'})
@PrefixLabel_ValidatingInputService({prefix: 'new', propertyToBind: 'newEmail'})

export class NewEmailInputService extends EmailInputService {
}
