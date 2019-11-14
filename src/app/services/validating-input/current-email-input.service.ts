import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { attach_prefix_ValidatingInputService } from './attach-prefix-validating-input-service.decorator';


@Injectable({providedIn: 'root'})
@attach_prefix_ValidatingInputService({prefix: 'current', propertyToBind: 'email'})

export class CurrentEmailInputService extends EmailInputService {
}
