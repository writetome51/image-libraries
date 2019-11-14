import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { attach_prefix_ValidatingInputService } from './attach-prefix-validating-input-service.decorator';


@Injectable({providedIn: 'root'})
@attach_prefix_ValidatingInputService({prefix: 'new', propertyToBind: 'newEmail'})

export class NewEmailInputService extends EmailInputService {
}
