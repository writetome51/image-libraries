import { Injectable } from '@angular/core';
import { PasswordInputService } from './password-input.service';
import { attach_prefix_ValidatingInputService } from './attach-prefix-validating-input-service.decorator';


@Injectable({providedIn: 'root'})
@attach_prefix_ValidatingInputService({prefix: 'new', propertyToBind: 'newPassword'})

export class NewPasswordInputService extends PasswordInputService {
}
