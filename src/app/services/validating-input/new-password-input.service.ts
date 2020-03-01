import { Injectable } from '@angular/core';
import { PasswordInputService } from './password-input.service';
import { PrefixLabel_to_ValidatingInputService }
	from './prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})

export class __NewPasswordInputService extends PasswordInputService {
}


@Injectable({providedIn: 'root'})

export class NewPasswordInputService extends __NewPasswordInputService {
}
