import { Injectable } from '@angular/core';
import { PasswordInputService } from '@services/validating-input/password/password-input.service';
import { PrefixLabel_to_ValidatingInputService }	// tslint:disable-next-line:max-line-length
	from '@services/validating-input/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new', prefix_propertyToBind: true})

export class __NewPasswordInputService extends PasswordInputService {
}

@Injectable({providedIn: 'root'})

export class NewPasswordInputService extends __NewPasswordInputService {
}
