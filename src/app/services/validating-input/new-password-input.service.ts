import { Injectable } from '@angular/core';
import { PasswordInputService } from './password-input.service';
import { PrefixLabel_ValidatingInputService } from './prefix-label-validating-input-service.decorator';


@Injectable({providedIn: 'root'})
@PrefixLabel_ValidatingInputService({prefix: 'new', propertyToBind: 'newPassword'})

export class NewPasswordInputService extends PasswordInputService {
}
