import { Injectable } from '@angular/core';
import { PasswordInputService } from '../../shared/services/validating-input/password/password-input.service';
import { PrefixLabel_to_ValidatingInputService }
	from '../../shared/services/validating-input/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'current'})

export class __CurrentPasswordInputService extends PasswordInputService {
}

@Injectable({providedIn: 'root'})

export class CurrentPasswordInputService extends __CurrentPasswordInputService {
}
